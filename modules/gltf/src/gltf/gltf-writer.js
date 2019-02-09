import GLTFBuilder from './gltf-builder';

function encodeGLB(json, options) {
  return new GLTFBuilder().encodeAsGLB(json, options);
}

// TODO - target writer structure not yet clear
export default {
  name: 'GLB',
  extension: 'glb',
  // TODO - encode standard format? Encode mesh to binary?
  encodeToBinary: encodeGLB
};
