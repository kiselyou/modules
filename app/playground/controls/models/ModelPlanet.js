import Planet from '@entity/sector/Planet'
import ModelPlanetClouds from './ModelPlanetClouds'
import { Mesh, Group, MeshPhongMaterial, SphereGeometry, Color } from 'three'
import { dilateGeometry, glowShaderMaterial, GeometricGlowMesh } from './../../../shader/glow'

class ModelPlanet extends Planet {
  /**
   *
   * @param {Scene} scene
   * @param {Loader} loader
   */
  constructor(scene, loader) {
    super()

    /**
     *
     * @type {Mesh}
     */
    this.planet = new Mesh()

    /**
     *
     * @type {Group}
     */
    this.group = new Group()

    /**
     *
     * @type {Scene}
     */
    this.scene = scene

    /**
     * @type {Loader}
     */
    this.loader = loader

    /**
     *
     * @type {ModelPlanetClouds}
     */
    this.modelClouds = new ModelPlanetClouds()
  }

  /**
   *
   * @returns {void}
   */
  buildMesh() {
    const segments = this.params.segments
    this.planet.geometry = new SphereGeometry(this.params.radius, segments, segments)
    this.planet.material = new MeshPhongMaterial({
      map: this.getTextureMap(),
      bumpScale: this.getBumpScale(),
      bumpMap: this.getTextureBump(),
      specularMap: this.getTextureSpec(),
      specular: this.getSpecular(),
    })

    this.planet.castShadow = true
    this.planet.receiveShadow = true
    this.group.position.copy(this.position)
    this.group.add(this.planet)

    const glowMesh = new GeometricGlowMesh(this.planet)
    this.group.add(glowMesh.object3d)

    // const geometry	= this.planet.geometry.clone()
    // dilateGeometry(geometry, 0.15)
    // const material = glowShaderMaterial()
    // const meshHalo = new Mesh(geometry, material)
    // this.group.add(meshHalo)
    //
    // material.uniforms.glowColor.value	= new Color('cyan')
    // material.uniforms.coeficient.value = 0.5
    // material.uniforms.power.value	= 4

    if (this.isClouds()) {
      this.group.add(
        this.modelClouds.getMeshClouds(
          this.params.radius,
          this.params.segments,
          this.getImageCloudMap(),
          this.getImageCloudMapTrans()
        )
      )
    }

    this.scene.add(this.group)
  }

  isClouds() {
    return this.params.texturesKey.cloudMap && this.params.texturesKey.cloudMapTrans
  }

  /**
   *
   * @returns {Color}
   */
  getSpecular() {
    return new Color(this.params.texturesKey.specular)
  }

  /**
   *
   * @returns {number|?}
   */
  getBumpScale() {
    return this.params.texturesKey.bump.scale
  }

  /**
   *
   * @returns {Texture|?}
   */
  getTextureMap() {
    return this.loader.getTexture(this.params.texturesKey.map)
  }

  /**
   *
   * @returns {Texture|?}
   */
  getTextureBump() {
    return this.loader.getTexture(this.params.texturesKey.bump.key)
  }

  /**
   *
   * @returns {Texture|?}
   */
  getTextureSpec() {
    return this.loader.getTexture(this.params.texturesKey.spec)
  }

  /**
   *
   * @returns {HTMLImageElement|?}
   */
  getImageCloudMap() {
    return this.loader.getImage(this.params.texturesKey.cloudMap)
  }

  /**
   *
   * @returns {HTMLImageElement|?}
   */
  getImageCloudMapTrans() {
    return this.loader.getImage(this.params.texturesKey.cloudMapTrans)
  }

  /**
   *
   * @param {object} data
   * @returns {ModelPlanet}
   */
  copy(data) {
    super.copy(data)
    this.buildMesh()
    return this
  }

  /**
   *
   * @param {number} delta
   * @returns {void}
   */
  update(delta) {
    if (this.planet) {
      this.planet.rotation.x += 0.003 * delta
      this.planet.rotation.y += 0.003 * delta
      this.planet.rotation.y += 0.003 * delta

      if (this.modelClouds.enabled) {
        this.modelClouds.update(delta)
      }
    }
  }
}

export default ModelPlanet