---
title: SPY2 09:00
name: class1
order: 1
icon: fas fa-lemon
date: 2019-09-13 16:23:44
---

## August 6, 2020

Hello!
So in today's class we implemented our lives system!

First we created a new class called **Lives** and made the sprite for lives our ship sprite

{% code Lives/Start %}
self.sprite = sprite_new('ship.png')
{% endcode %}

Then, in our **Level1** room, we set up our lives to display on the top left of the screen

{% code Level1/Start %}
# ...
game.lives1 = Lives()
game.lives1.y = 200 
game.lives1.x = -250

game.lives2 = Lives()
game.lives2.y = 200
game.lives2.x = -250+16

game.lives3 = Lives()
game.lives3.y = 200
game.lives3.x = -250+32
{% endcode %}

Then finally, we destroyed our lives one by one based upon how many lives we had after colliding with an asteroid. I'll put the whole collision code for reference.

{% code Player/Loop %}

# If the player collides with an asteroid
# Destroy the asteroid, player loses a life
asteroid = collision_check(self, "Asteroid")
if asteroid:

    destroy(asteroid)
    game.lives = game.lives - 1

    if game.lives == 2:
        destroy(game.lives3)
    elif game.lives == 1:
        destroy(game.lives2)
    elif game.lives == 0:
        destroy(game.lives1)

if game.lives <= 0:
    destroy(self)
    room_set('GameOverScreen')
{% endcode %}

Also note we set our room to **GameOverScreen** to show when we ran out of lives (we did that at the end of class :) )

And that's it! Tomorrow we start our new game!!!
See you all then.

## August 5, 2020

Hey guys.
In today's class we created a splash screen in [Photopea](https://www.photopea.com/) and added it to our game!

First we created a new class (I called my class **SplashScreen**), a new room (I called my woom **StartScreen**), and imported our sprite (I called mine **splashscreen.png**).

We changed our Game code to set the room to **StartScreen**

{% code Game/Start %}
# ...
room_set('StartScreen')
{% endcode %}

Then we added code that binds our sprite to the Class

{% code SplashScreen/Start %}
self.sprite = sprite_new('splashscreen.png')
{% endcode %}

And then we made the **StartScreen** room show us our Class

{% code StartScreen/Start %}
SplashScreen()
{% endcode %}

The last thing we did was make it so that when the user presses the space key in our **StartScreen** they will be transported to the game.

{% code StartScreen/Loop %}
if key_was_pressed(' '):
    room_set('Level1')
{% endcode %}

And that's it!
Tomorrow we'll see about the lives display and start our new game journey.
See y'all then :)

## August 4, 2020
Hey guys.

In today's class, we worked on implementing the score and the lives in our game!
We did score together and lives separately, but I'll put the code for both here!

First thing, create the **Global** variables. So our game script now looks like this.

{% code Game/Start %}
# Global variables
self.score = 0
self.lives = 3

room_set('Level1')
{% endcode %}

Next, we increase the score (or descrease our lives) if an appropreate collision happens. For increasing our score, it's when a missile collides with an asteroid

{% code Missile/Loop %}
# ...

asteroid = collision_check(self, "Asteroid")
if asteroid:
    # destroy the missile and the asteroid
    destroy(self)
    destroy(asteroid)
    # Increaded our score by 25
    game.score = game.score + 25
    print("Your score is now", game.score)
{% endcode %}

For decreasing our lives, it happens when our Ship collides with an asteroid! NOTE that when we exhaust all of our lives, we need to destroy the ship, not when it collides with the asteroid!

{% code Player/Loop %}
asteroid = collision_check(self, "Asteroid")
if asteroid:
    destroy(asteroid)
    # Get rid of destroy(self)
    game.lives = game.lives - 1
    print('You have', game.lives, 'lives left')

if game.lives <= 0:
    destroy(self)
{% endcode %}

And that's it! Tomorrow's class we'll create a splash screen, and begin to look at the next game we will be creating! :)

## July 31, 2020

Hey guys, in today's class we made our asteroids move, and made a spawner for them!

First, to make the asteroids move (and teleport when whey collide with boundaries)

{% code Asteroid/Start %}
import math
# Moves the asteroid in the direction of the angle
self.x = self.x + math.cos(math.radians(90 + self.angle))*2
self.y = self.y + math.sin(math.radians(90 + self.angle))*2

# Teleport boundaries
# From top to bottom
if self.y > 250:
    self.y = -250

# From bottom to top
if self.y < -250:
    self.y = 250

# From right to left
if self.x > 280:
    self.x = -280

# From left to right
if self.x < -280:
    self.x = 280
{% endcode %}

Next, we created a spawner

{% code Spawner/Start %}
self.timer = 0

# Get rid of empty image box
self.x = 3141592653589893238
{% endcode %}

{% code Spawner/Loop %}
import random

self.timer = self.timer + 1

if self.timer > 180:
    # Resets the timer
    self.timer = 0
    # Spawns a new asteroid
    asteroid = Asteroid()
    # Generate a random angle between 0 and 360
    random_angle = random.randint(0,360)
    # Set the angle of the asteroid to the random angle
    asteroid.angle = random_angle
    # Move the asteroid to (300,-300)
    asteroid.x = 300
    asteroid.y = -300   
{% endcode %}

And that's it! 
REMEMBER Monday August 3rd is a HOLIDAY, so enjoy the break and I'll see you guys on Tuesday! where we will set up a score and lives!
  
## July 30, 2020

Hey guys, today we worked on collision detection!
That's what happens when two GameObjects collide with one anoher. PixelPad gives us the ability to decide what happens when two object collide!!

So we set up the collision detection between the Missile and the Asteroid. 
To know where to place the code, ask yourself "Does the Missile collide with the Asteroid, or does the Asteroid collide with the Missile?" Because we agreed that the "Missile collides with the Asteroid", we place the following code in **Missile**

{% code Missile/Loop %}
# ...
# Check to see if the missile collides with the asteroid!
asteroid = collision_check(self, "Asteroid")
if asteroid:
    destroy(asteroid)
    destroy(self)
{% endcode %}

Next we added collision detection between the player and the asteroid.
We put it in the player script:

{% code Player/Loop %}
asteroid = collision_check(self, "Asteroid")
if asteroid:
    destroy(asteroid)
    destroy(self)
{% endcode %}

And that's it! Tomorrow's class we will focus on making the asteroid move, then spawn some more asteroids!

See you guys tomorrow :)


## July 29, 2020

Hey guys, so today we got our ship and missiles moving in the proper direction.
We did that by using the math library in Python to calculate the **sin** and **cos** of the angle that PixelPad stores. (Just in case you were curious)

We also made it so that when the player goes too far in any direction, he is teleported to the opposite side of the screen, and made it so that we could shoot missiles by pressing the space bar.

Here is the entire Player code for reference

{% code Ship/Loop %}
import math

if key_is_pressed('arrowup'):
    # Move the ship at the angle we are facing
    self.x = self.x + math.cos(math.radians(90 + self.angle))*2
    self.y = self.y + math.sin(math.radians(90 + self.angle))*2

if key_is_pressed('arrowleft'):
    self.angle = self.angle + 5

if key_is_pressed('arrowright'):
    self.angle = self.angle - 5

if key_is_pressed(' '):
    missile = Missile()
    missile.x = self.x
    missile.y = self.y
    missile.angle = self.angle


# Teleport Boundaries
# From bottom to top
if self.y < -250:
    self.y = 250

# From top to bottom
if self.y > 250:
    self.y = -250

# From left to right
if self.x < -300:
    self.x = 300

# From right to left
if self.x > 300:
    self.x = -300
{% endcode %}

Then we had to make sure the missile would move too!

{% code Missile/Loop %}
import math

self.x = self.x + math.cos(math.radians(90 + self.angle)) * 4
self.y = self.y + math.sin(math.radians(90 + self.angle)) * 4

# Destroys the missile if it goes outside of the screen!
if self.y < -250:
    destroy(self)

if self.y > 250:
    destroy(self)

if self.x < -280:
    destroy(self)

if self.x > 280:
    destroy(self)
{% endcode %}

You'll notice in this code that the last thing we did was destroy the missile when it left the screen (instead of teleporting it like we did with our player)

Tomorrow's class will focus on collision detection! :) 
See you guys then!


## July 28, 2020

Hey guys.
Today we began writing the code for our new game! We didn't write too much code, but it was all over the place, so hopefully seeing it all in one place will help you make sense of it more! :)

The first thing we did was set up our game to point to room level 1

{% code Game/Start %}
# Global Variables


room_set('Level1')
{% endcode %}
Remember I left a bit of room at the top of the file for later use.

Next, we filled in our Level1!

{% code Level1/Start %}
player = Ship()

missile = Missile()
missile.y = 50

asteroid = Asteroid()
asteroid.x = 150
asteroid.y = 125

{% endcode %}

Now we see a bunch of blue squares everywhere. Well, we have to go in to each class and set the sprite up so we can see what each GameObjcet represents:

{% code Ship/Start %}
self.sprite = sprite_new('ship.png')
{% endcode %}

{% code Missile/Start %}
self.sprite = sprite_new('missile.png')
{% endcode %}

{% code Asteroid/Start %}
self.sprite = sprite_new('asteroid1.png')
{% endcode %}

The last thing we did was make the PlayerShip move (and rotate) when pressing the arrow keys! 

{% code Ship/Loop %}
if key_is_pressed('arrowup'):
    self.y = self.y + 2

if key_is_pressed('arrowleft'):
    self.angle = self.angle + 5

if key_is_pressed('arrowright'):
    self.angle = self.angle - 5
{% endcode %}

Tomorrow we will make the ship move in the direction it is facing!

See you guys then :)

## July 27, 2020
Hey guys, so today we started our new game **Asteroids**
I encourage you guys to play the game and get a feel for how it works, here is a link if you want:

[https://astrds.com/](https://astrds.com/)

So today in class, we simply created our assets and put them into PixelPad. Tomorrow we will start with the interactions!!

See you guys tomorrow :)

## July 24, 2020

Hey guys! Today we all finished our Level2! Wooh!
So we took the class to focus on animations. We created a two-sprite spritesheet and imported it into pixelpad. We over-wrote the code in the **Fish** class to make it work.

Here is the code to get the animations to work:

{% code Fish/Start %}

# This creates a sprite sheet that has 1 row and 2 columns
spritesheet = sprite_new('ssfish.png', 1, 2)

# This creates a swim animation using the spritesheet
# at 3 FPS, starting at frame 0 and ending at frame 1
swim = animation_new(spritesheet, 3, 0, 1)

# This runs the animation
animation_set(self, swim)
{% endcode %}

And that's it!
Monday, we begin the adventure of Game2!

## July 23, 2020

Once again, we just worked on Level2!
Today was the last day, and tomorrow we will start with animations!

Have a great day, see you all tomorrow :)

## July 22, 2020

Hey guys,

In today's class we are still working on Level2! 
Tomorrow we will finish it off and start to look at animations!

See you guys tomorrow!

## July 21, 2020

Hey guys, in today's class, we just continued working on our Level 2!
I've just taken a look and they are all coming along quite well.

Tomorrow we will play it by ear to see if we need more time.

Have a great day and I'll see you guys tomorrow! :)

## July 20, 2020

Hey guys!
So in today's class, once we got all of the objects on the screen moving, our goal was to work on a Level2 room!

The idea is that once we complete Level1, instead of going to the LevelDone screen, we will go to a new **Level2** screen. Once the player has finished **Level2**, they will then go to the LevelDone screen.

How you implement, the sprites, the difficulty of the Level are all up to you. PLEASE be creative and have fun with this!

See you guys tomorrow! :)

## July 17, 2020

Hey guys,
So in today's class we focused on movement! We started puttin code in the Classes we were creating to show our images to the screen!
The rule of thumb is: if you are going to duplicate the objects, it's probably best to have some code in the Classes that represent the Objects. 

So I'm going to walk you guys through having the hooks (For me Enemy1) on my game bob up and down, and I'll leave it to you guys to do the same for the oter enemies!

First thing's first, in our Enemy1 script, we will add the sprite code, and some variables that will keep track of where we started, what direction we are travelling, and how far we want to travel from where we started:

{% code Enemy1/Start %}
# Enemy1 start
# Changes the sprite for EVERY Enemy1
self.sprite = sprite_new('enemy1.png')

# This will be changed when we make the Game Object
self.originalY = 0
# How far the game object can move
self.distance = 20
# What direction (-1 means down, 1 means up)
#      (x)       (-1 means left, 1 means right)
self.direction = -1
{% endcode %}

Now, in the Loop of Enemy1, we have some code that checks to see if we have traveled too far from our origin. If we have, we change the direction!

{% code Enemy1/Loop %}
# If my object is more than "self.distance" away from where it started,
# Then change the direction
if abs(self.y - self.originalY) > self.distance:
    self.direction = self.direction * -1

self.y = self.y + self.direction
{% endcode %}

Now, the last thing we have to do is modify our Level1 code to reflect these changes (Take out the sprite code for Enemy1 and add the originalY code)

{% code Level1/Start %}
# Creates a new hook and moves it to the position (100, 200)
self.hook = Enemy1()
self.hook.x = 100
self.hook.y = 200
self.hook.originalY = 200 

self.hook1 = Enemy1()
self.hook1.x = -100
self.hook1.y = 50
self.hook1.originalY = 50

self.hook2 = Enemy1()
self.hook2.x = 97
self.hook2.y = -78
self.hook2.originalY = -78
{% endcode %}

Notice how all of my hooks don't have the sprite code, and all of the self.hook**X**.originalY attributes are the same as the self.hook**X**.y attributes!

And that's it! If you follow these steps for the other 2 enemies, then we will be done!

Have a great weekend and I'll see you guys on Monday! :)

## July 16, 2020

Hey guys. 
Today's class we got the victory screen in our game, then we made a quality of life addition to change the direction of the fish when we move left and right to make the fish look like it's always swimming forward!

So to make the victory screen appear, it was a simple matter of showing the Victory image to the screen inside of the **LevelDone** room:

{% code LevelDone/Start %}
victory = Victory()
victory.sprite = sprite_new('victory.png')
{% endcode %}

This will work provided you have created a class called **Victory** and named your victory image **victory.png**

The second thing we did was flip our fish around using the **.scaleX** attribute.

When we press the "a" key, we want to set the **scaleX** to -1, and when we presse the "d" key, set it back to 1.

Here is whtat the modified movement code looks like:

{% code Level1/Loop %}
# This code controls our fish, moving it with the wasd keys
if key_is_pressed('w'):
    self.fish.y = self.fish.y + 2

if key_is_pressed('a'):
    self.fish.x = self.fish.x - 2
    self.fish.scaleX = -1

if key_is_pressed('s'):
    self.fish.y = self.fish.y - 2

if key_is_pressed('d'):
    self.fish.x = self.fish.x + 2
    self.fish.scaleX = 1
{% endcode %}

And that's it! Tomorrow we make the enemies move!

Have a great day, I'll see you all tomorrow!

## July 15, 2020

Hey guys! Today's class was all about **Rooms** in PixelPad. A Room is basically a level in your game, but other things can be levels too like the Game Over screen, then Menu screen, or even the Victory screen! 

The first thing did was create a new Room called **Level1** by pressing the **+** next to the **Rooms** label. 

Now you are going to move **ALL** of the code from your Game script to your Level1 script in both the Start and Loop tabs!

Now, all you need to do is put one line of code in your game to make everything work the way it did before!

{% code Game/Start %}
room_set('Level1')
{% endcode %}

Now we want to create a room for the Victory Screen, we will call it **RoomDone**

We only put 2 lines of code in RoomDone that displays a fish in the middle of the screen:

{% code LevelDone/Start %}
fish = Fish()
fish.sprite = sprite_new('fish.png')
{% endcode %}

Now, we just need to add the code that says if we collide with the sign (or whatever your **end** object is) then we set the room to the level done.

So now, this code will be in **Level1** because we moved it to there from the Game script:

{% code Level1/Loop %}
# ...
sign = collision_check(self.fish, "End")
if sign:
    room_set('LevelDone')
{% endcode %}

Now when you collide with the sign, you should see a fish.
Tomorrow's class we will finish a Victory screen and display it when the user collides with the sign!

Have a great day, see you all tomorrow :)

## July 14, 2020

Today we talked about collision detection!! Woot Woot!
Collision detection can be broken down into two steps:
1. Check to see if we actually colllided with something
2. If we did collide with something, do something as a result!

In class, we saw how to check if our **fish** collided with all of our enemies, and here is the code for that!

{% code Game/Loop %}
# Check for collisions
# 1. Actually check to see if there is a collision
# 2. If there was a collision, do something!

hook = collision_check(self.fish, "Enemy1")
if hook:
    destroy(self.fish)

bomb = collision_check(self.fish, "Enemy2")
if bomb:
    destroy(self.fish)

poison = collision_check(self.fish, "Enemy3")
if poison:
    destroy(self.fish)

sign = collision_check(self.fish, "End")
if sign:
    print("You won!")
{% endcode %}

Notice how on the last collision (with the sign) instead of destroying the fish, we just printed out a victory message for the user! If we win the game, we probably don't want our player to die :)

Tomorrow we will finish off collision detection and tackle what happens when we actually win the game.

See you guys tomorrow!

## July 13, 2020

Hey guys! Today we learned about two important things:
1. We can re-use the same picture multiple times in games
2. We can move Game Objects around using the **.x** and **.y** "attributes"

Our only goal today was to add enemies to our game and space them out, here is the example of the code that I did, yours may be different and that **is totally okay!**.

{% code Game/Start %}
# ...
# Creates the fish object
self.fish = Fish()
# 'Binds' the picture to the fish object
self.fish.sprite = sprite_new('fish.png')
# Moves the fish 250px to the left!
self.fish.x = -250

# Creates a new hook and moves it to the position (100, 200)
self.hook = Enemy1()
self.hook.sprite = sprite_new('enemy1.png')
self.hook.x = 100
self.hook.y = 200

self.hook1 = Enemy1()
self.hook1.sprite = sprite_new('enemy1.png')
self.hook1.x = -100
self.hook1.y = 50

self.hook2 = Enemy1()
self.hook2.sprite = sprite_new('enemy1.png')
self.hook2.x = 97
self.hook2.y = -78

self.bomb = Enemy2()
self.bomb.sprite = sprite_new('enemy2.png')
self.bomb.x = -100
self.bomb.y = -100

self.bomb1 = Enemy2()
self.bomb1.sprite = sprite_new('enemy2.png')
self.bomb1.x = 200
self.bomb1.y = 200

self.poison = Enemy3()
self.poison.sprite = sprite_new('enemy3.png')
self.poison.x = -200
self.poison.y = 150

self.poison1 = Enemy3()
self.poison1.sprite = sprite_new('enemy3.png')
self.poison1.x = 100
self.poison1.y = 75
{% endcode %}

The last thing we talked about were comments (the # symbol)
Comments in programming are a way to communicate with other programmers (usually yourself) what the code actually does. It's meant to be written in a language that even non-programmers understand (so English for most of us).

As I mentioned in class, comments won't be looked at for this game, but will be looked at in future games, so get used to them!

Have a great day, and I'll see you guys tomorrow :) 

## July 10, 2020

Hey guys! So today we learned how to get our fish to move on the screen.
First thing's first, we need to make sure our fish appears on the screen.This is the code to do that

{% code Game/Start %}
#  ...
self.fish = Fish()
self.fish.sprite = sprite_new('fish.png')
{% endcode %}

Notice the **self.** at the beginning of fish, that's important. Without it, we won't be able to move our fish in the **Loop** code.

Now, here is the code we wrote to move the fish whenever we press w, a, s, or d.

{% code Game/Loop %}
if key_is_pressed('w'):
  self.fish.y = self.fish.y + 1

if key_is_pressed('a'):
  self.fish.x = self.fish.x - 1

if key_is_pressed('s'):
  self.fish.y = self.fish.y - 1

if key_is_pressed('d'):
  self.fish.x = self.fish.x + 1
{% endcode %}

And that's it! 

Have a great weekend. Next week we will get our "enemies" on the screen and moving!

## July 9, 2020

Hey guys, so today we finished off creating our sprites for our FishMaze game, and finished uploading them to PixelPad.

Now comes the fun part, getting the images to appear on the right side of the screen (That's where our game will be).

Our goal will be to get the **background** to appear on the game screen!

The first thing we need to do is create a new Class, and we will call it **Background** (Note: the capital B). Now, click back on our Game Class, and we will write the following code

{% code Game/Start %}
background = Background()
background.sprite = sprite_new('background.png')
{% endcode %}

Now when we press play, our background should appear to the right.

Some things to note:
1. If there is an error, MAKE SURE everything is spelled correctly!
2. Be patient with yourselves. It looks like gibberish now, but soon you will understand everything the above code does.

Have a great day and I'll see you guys tomorrow!

## July 8, 2020

Hey guys, so today, we simply continued creating assets for our FishMaze game.

Here is what we have to create by the end of tomorrow's class:
- A Background (underwater)
- 3 different "enemies" that our main character must avoid (could be a hook, enemy fish or shark, human, bomb, or literally anything you can think of)
- Some way to know the player has reached the end of the level
(Could be a sign, maybe a cave, completely up to you)

So far, all of your Sprites are looking great! Keep up the great work and I'll see you guys tomorrow!

## July 7, 2020

Hey guys! So today, we learned how to create our own assets (a fish sprite) and upload it to PixelPad.

### How to access Photopea
The website we used to create our masterpiece is [Photopea](https://www.photopea.com/). We pressed on **New Project** and made sure the width and the height were **64px**. Then we pressed the "Create" button.

Once we finished our drawing, we went to File > Export As > PNG and pressed the "Save" button.

### How to upload to PixelPad
Now, login to [PixelPad](http://pixelpad.io) and click on **My Apps**. Click on the game we created in class (FishMaze).

Now on the left side you will see categories (Classes, Rooms, Sprites...) Next to the **Sprites** label there is a **+**, click on that and press **Upload Assets**. Now find your fish picture that you saved before. A popup should appear at the top to ask what you want to name your texture: name it **fish**.

That's it!
Tomorrow we will make more assets and upload them to PixelPad!

Have a great day and see you tomorrow!

## July 6, 2020

Welcome to our first-ever all-virtual Reidmount class! Today was just an introduction to the course, and some introductions to each other.





