![](https://fontmeme.com/permalink/181212/c5c4b3134061f86d06de9895b1ea5522.png)

# Table of Contents
- [Background and Overview](#background-and-overview)
  - [Demo](#demo)
- [Technologies](#technologies)
- [Site](#site)
  - [Landing Page](#landing-page)
  - [In-Game](#in-game)
  - [Game Over](#game-over)
- [Feature Highlights](#feature-highlights)
  - [Handle Enclosures](#handle-enclosures)
  - [Particles and Notifications](#particles-and-notifications)
  - [Multiplier](#multiplier)

## Background and Overview

Chillflix is a clone of the video-streaming site, Netflix. On this site, users are able to create new accounts and login and watch short clips of popular movies and shows.

Features cloned from Netflix include:
* User authentication
* Featured video preview
* Video categories
* Infinite scroll wheel
* Video controls on hover
* Video info dropdown
* My List
* Search functionality
* Video playback

### Demo
[Live Link](https://flix-n-chill.herokuapp.com/#/)

## Technologies

Chillflix was built on a `Ruby on Rails` backend with a `React/Redux` front end. User data such as login and list information was stored in a `PostgreSQL` database. Videos and thumbnails were stored and accessed through `AWS S3`. 

## Site

### Splash Page

The Chillflix splash page/auth is an exact clone of the Netflix. It features the same background, fonts, and effects. The user auth forms have the same shrink effects and colors/errors match.

![](./screenshots/splash.png)
![](./screenshots/auth.gif)

### Videos

Chillflix videos are featured on scroll wheels according to their categories. Scroll wheels feature infinite scroll. Upon hovering over a single video, controls for that video appear. The controls include a play button, an add to my list button, and an expand button which displays more info on the video.

![](./screenshots/hover.png)

### Info

When the expand button is clicked, the videos title and description is shown. Below the description, there is a play button and my list button. There is also a button to close the info. When a video's info is expanded, the video is highlighted with a white border and arrow

![](./screenshots/info.png)

Also implemented is a reactive search function

## Feature Highlights

### Handle Enclosures

There are many things rendering on the board at once so it was difficult to create the game logic. I went through many implementations to figure out when and where orbs were encompassed but I finally landed on the following:

* Render the players trail
  * Array of points connected with quadratic curves
* Check every combination of four points in the trail to see if there are any collisions
  * At least four points to create a closed circle
* Save the start index, end index, and collision point
* Fill that area with a radial-gradient to signify closed circle
* For each active orb, grab each pixel position on the board
  * Each orb is its own canvas on top of the original canvas. Therefore, each orb's position on the window has a matching position on the board
* Check those pixels on the board
  * If it is clear, do nothing. If it has the color of the radial-gradient, orb has been enclosed so react depending on the orb type

![](./screenshots/playing.png)

```
for(let i = this.enemies.length - 1; i >= 0; i--){
  const enemy = this.enemies[i];
  const ex = Math.round(enemy.x);
  const ey = Math.round(enemy.y);

  const indices = [
    ((ey * bmpw) + Math.round(ex - constants.ENEMY_SIZE)) * 4,
    ((ey * bmpw) + Math.round(ex + constants.ENEMY_SIZE)) * 4,
    ((Math.round(ey - constants.ENEMY_SIZE) * bmpw) + ex) * 4,
    ((Math.round(ey + constants.ENEMY_SIZE) * bmpw) + ex) * 4
  ];
  for(j = indices.length - 1; j >= 0; j++){}
    const index = indices[j];
    if (pixels[index + 1] >= 0 && pixels[index + 2] >= 200) {
      if (enemy.type === constants.ENEMY_TYPE_BOMB || enemy.type === constants.ENEMY_TYPE_BOMB_MOVER) {
        this.handleBombInClosure(enemy);
      }
      else {
        this.handleEnemyInClosure(enemy);

        casualties.push(enemy);
      }

      this.enemies.splice(i, 1);
      break;
    }
  }
}
```

### Particles and Notifications

Whenever something happens in the game, there is a notification. It can vary between adding to the score, losing health, high score increase, and more. Also, when blue orbs are encompassed, an explosion animation is played. At first, it was different to implement because I was rendering everything on one canvas. But in adding this feature, I refactored to have all orbs as their own canvas leading to a much easier implementation of notifications and particles.

* Most notifications inherit the x and y values from object that triggered them
  * This allowed me to render them exactly where the event occurred
* Every framerate, I decrease the notifications y-value to give it an effect of bubbling up

* Particles also inherit x and y values
* However, they are also given a random x and y velocity
* Every framerate, they get updated positions based on their velocities and eventually fade out

![](./screenshots/active.png)

```
renderNotifications() {
  for(let i = this.notifications.length - 1; i >= 0; i--){
    const notification = this.notifications[i];

    // Make the text float upwards
    notification.y -= 0.4;

    let radius = 14 * notification.scale;
    this.context.save();
    this.context.font = 'bold ' + Math.round(12 * notification.scale) + "px Arial";

    this.context.beginPath();
    this.context.fillStyle = 'rgba(0,0,0,' + (0.7 * notification.alpha) + ')';
    this.context.arc(notification.x, notification.y, radius, 0, Math.PI * 2, true);
    this.context.fill();

    this.context.fillStyle = "rgba( " + notification.rgb[0] + ", " + notification.rgb[1] + ", " + notification.rgb[2] + ", " + notification.alpha + " )";
    this.context.fillText(notification.text, notification.x - (this.context.measureText(notification.text).width * 0.5), notification.y + (4 * notification.scale));
    this.context.restore();

    // Fade out
    notification.alpha *= 1 - (0.08 * (1 - ((notification.alpha - 0.08) / 1)));

    // If the notifaction is faded out, remove it
    if (notification.alpha < 0.05) {
      this.notifications.splice(i, 1);
    }

    radius += 2;

    this.invalidate(notification.x - radius, notification.y - radius, radius * 2, radius * 2);
  }
}
```

### Multiplier

I wanted the multiplier to gradually step up before increasing to the next level. The logic behind it wasn't difficult but the rendering was a little tricky to come up with but the implementation was simple and clean.

* Render empty black circles for each possible multiplier
* Set fill and shadow styles
* Check if the multiplier has reached a full step
  * If so, fill in the entire circle
  * Else, fill in the circle but adjust the radius by multiplying by the step

![](./screenshots/mult.png)

```
while (let i = constants.MULTIPLIER_LIMIT - 1; i >= 0; i--) {
  this.context.save();
  this.context.beginPath();

  const x = 6 + (i / constants.MULTIPLIER_LIMIT) * 80;
  const y = 5;
  const radius = 6;

  this.context.fillStyle = 'rgba(40,40,40,0.8)';
  this.context.arc(x, y, radius, 0, Math.PI * 2, true);
  this.context.fill();

  if (i < this.multiplier.major) {
    this.context.beginPath();
    this.context.shadowOffsetX = 0;
    this.context.shadowOffsetY = 0;
    this.context.shadowBlur = 14;
    this.context.shadowColor = "rgba(255,0,255, 0.9)";
    this.context.fillStyle = "rgba(255,0,255, 0.9)";

    // fully filled circle
    if (i < this.multiplier.major - 1) {
      this.context.arc(x, y, radius, 0, Math.PI * 2, true);
    }
    // partially filled
    else {
      this.context.fillStyle = "rgba(255,0,255," + 0.8 * this.multiplier.minor + ")";
      this.context.arc(x, y, radius * this.multiplier.minor, 0, Math.PI * 2, false);
    }
    this.context.fill();
  }
  this.context.restore();
}
```

[Back to Top](#)