/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This is the Splash Scene
// Edited by: Olantu
// Edited on: Jun 2023
class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: "splashScene" });

    this.splashSceneBackgroundImage = null;
  }

  init(data) {
    this.cameras.main.setBackgroundColor("#ADD8E6"); // Set the background color of the main camera to light blue
  }

  preload() {
    console.log("Splash Scene");

    // Load the image for the splash scene background
    this.load.image("splashSceneBackground", "./assets/splashSceneImage.png");
  }

  create(data) {
    this.splashSceneBackgroundImage = this.add.sprite(
      0,
      0,
      "splashSceneBackground"
    ); // Add the splash scene background image at position (0, 0)
    this.splashSceneBackgroundImage.x = 1920 / 2; // Set the x-coordinate of the splash scene background image to half the screen width
    this.splashSceneBackgroundImage.y = 1080 / 2; // Set the y-coordinate of the splash scene background image to half the screen height
  }

  update(time, delta) {
    if (time > 3000) {
      this.scene.switch("titleScene"); // Switch to the title scene after 3000 milliseconds (3 seconds)
    }
  }
}

export default SplashScene;
