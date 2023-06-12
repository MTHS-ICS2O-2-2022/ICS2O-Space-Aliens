/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This is the Title Scene
// Edited by: Olantu
// Edited on: Jun 2023
class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: 'titleScene' })

    this.titleSceneBackgroundImage = null
    this.titleSceneText = null
    this.titleSceneTextStyle = { font: '200px Times', fill: '#fde4b9', align: 'center' }
  }

  init(data) {
    this.cameras.main.setBackgroundColor('#000')
  }

  preload() {
    console.log('Title Scene')

    // Load the background image for the title scene
    this.load.image('titleSceneBackground', 'assets/aliens_screen_image.jpg')
  }

  create(data) {
    // Create the background image sprite for the title scene
    this.titleSceneBackgroundImage = this.add.sprite(0, 0, 'titleSceneBackground').setScale(2.75)
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2

    // Create the title text for the title scene
    this.titleSceneText = this.add.text(1920 / 2, (1080 / 2) + 350, 'Space Aliens', this.titleSceneTextStyle).setOrigin(0.5)
  }

  update(time, delta) {
    // Switch to the menu scene after a certain amount of time (6 seconds in this case)
    if (time > 6000) {
      this.scene.switch('menuScene')
    }
  }
}

export default TitleScene
