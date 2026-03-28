/**
 * Passes position directly to clip space
 */
export const LANDING_VERTEX = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`

/**
 * Animated noise-based background
 */
export const LANDING_FRAGMENT = `
precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform int u_mode; // 0 = dark, 1 = light

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 rot = mat2(0.87, 0.48, -0.48, 0.87);
  for (int i = 0; i < 6; i++) {
    v += a * noise(p);
    p = rot * p * 2.0;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  float t = u_time * 0.15;

  vec2 aspect = vec2(u_res.x / u_res.y, 1.0);
  vec2 p = (uv - 0.5) * aspect;

  vec2 flowP = vec2(p.x, p.y - t * 0.5);

  float n1 = fbm(flowP * 3.0 + vec2(0.0, t * 0.2));
  vec2 warp = flowP + n1 * 0.5;
  float n2 = fbm(warp * 4.0 - vec2(0.0, t * 0.4));
  float n3 = fbm(warp * 6.0 + n2 * 1.0);

  float mask = smoothstep(0.8, 0.0, uv.y);
  mask = pow(mask, 1.2);

  float intensity = n3 * 1.2 + (n2 - 0.5) * 0.5;

  vec3 col;
  if (u_mode == 0) {
    // Dark mode palette
    vec3 c1 = vec3(0.05, 0.05, 0.05);
    vec3 c2 = vec3(0.12, 0.12, 0.12);
    vec3 c3 = vec3(0.18, 0.18, 0.18);
    vec3 c4 = vec3(0.25, 0.25, 0.25);

    col = mix(c1, c2, smoothstep(0.2, 0.6, intensity));
    col = mix(col, c3, smoothstep(0.6, 0.9, intensity));
    col = mix(col, c4, smoothstep(0.8, 1.1, intensity));
  } else {
    // Light mode palette (primary green tones)
    vec3 c1 = vec3(0.0, 0.72, 0.45); // #00b773
    vec3 c2 = vec3(0.1, 0.8, 0.5);
    vec3 c3 = vec3(0.2, 0.9, 0.6);
    vec3 c4 = vec3(0.3, 1.0, 0.7);

    col = mix(c1, c2, smoothstep(0.2, 0.6, intensity));
    col = mix(col, c3, smoothstep(0.6, 0.9, intensity));
    col = mix(col, c4, smoothstep(0.8, 1.1, intensity));
  }

  col *= mask;
  float alpha = mask * smoothstep(0.1, 0.9, intensity);

  float dither = (hash(gl_FragCoord.xy + t) - 0.5) * 0.04;
  col += dither;

  float revealProgress = u_time * 0.8;
  float revealMask = smoothstep(0.0, 0.3, revealProgress - uv.x);

  alpha *= revealMask;

  gl_FragColor = vec4(col, alpha);
}
`
