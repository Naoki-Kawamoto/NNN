import glUtil from 'gl-util';

import vert from './default.vert';
import frag from './grayscale.frag';

/**
 * @param {HTMLCanvasElement} canvas
 * @param {ImageBitmap} bitmap
 */
function grayscale(canvas, bitmap) {
  const gl = canvas.getContext('webgl');

  glUtil.program(gl, vert, frag);
  glUtil.attribute(
    gl,
    'a_texCoord',
    /* prettier-ignore */
    [
      // Triangle A
      0.0, 0.0,
      0.0, 1.0,
      1.0, 1.0,
      // Triangle B
      0.0, 0.0,
      1.0, 1.0,
      1.0, 0.0,
    ],
  );
  glUtil.texture(gl, 'u_texture', bitmap);

  gl.drawArrays(gl.TRIANGLES, 0, 6);
}

export default grayscale;
