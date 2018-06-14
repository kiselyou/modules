import Asteroid from '@entity/particles-sector/Asteroid'
import {BoxGeometry, MeshPhongMaterial} from 'three'
import Model from './../Model'

class ModelAsteroid extends Asteroid {
  /**
   *
   * @param {Scene} scene
   * @param {Loader} loader
   */
  constructor(scene, loader) {
    super()

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
     * @type {Model}
     */
    this.model = new Model()
  }

  /**
   *
   * @returns {void}
   */
  buildMesh() {
    this.model.geometry = new BoxGeometry(6, 6, 6)
    this.model.material = new MeshPhongMaterial({color: 0xFF0000})
    this.model.castShadow = true
    this.model.receiveShadow = true
    this.scene.add(this.model)
  }

  /**
   *
   * @param {Loader} loader
   * @returns {void}
   */
  async beforeStart(loader) {
    this.buildMesh()
  }

  /**
   *
   * @param {Object} data
   * @param {Array} [except]
   * @returns {ModelAsteroid}
   */
  copy(data, except = []) {
    super.copy(data, except)
    return this
  }

  /**
   *
   * @param {number} delta
   * @returns {ModelAsteroid}
   */
  calculatePosition(delta = 1) {
    this.angleToCenter += this.speedMove * delta
    this.model.position.setX(this.distanceToCenter * Math.cos(this.angleToCenter))
    this.model.position.setZ(this.distanceToCenter * Math.sin(this.angleToCenter))
    return this
  }

  /**
   *
   * @param {number} delta
   * @returns {void}
   */
  update(delta) {
    this.calculatePosition(delta)
  }

  /**
   *
   * @param {Intersect} intersect
   * @param {MouseEvent} mouseEvent
   * @returns {void}
   */
  updateTooltip(intersect, mouseEvent) {

  }

  /**
   *
   * @param {Intersect} intersect
   * @param {MouseEvent} mouseEvent
   * @returns {void}
   */
  onClick(intersect, mouseEvent) {

  }
}

export default ModelAsteroid