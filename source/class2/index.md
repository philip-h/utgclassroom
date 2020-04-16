---
title: PY201 10:00
name: class2
icon: fas fa-gamepad
date: 2019-09-13 16:27:26
---

## April 11, 2020

Hey guys! 
So from now on, we will be continuing our classes online using Zoom.

Your work for this week was to ensure that you are all caught up. 

Below is the code that we've done together since ending our in-person classes. If you have any questions, please don't hesitate to ask questions on the form: https://staugistine.underthegui.com/forum

### Main Script
{% code game/start %}
room_set('rm_level2')
{% endcode %}

### Room scripts
{% code rm_level1/start %}
# Enter the start code for rm_level1 here.
background = object_new('obj_background')

wall = object_new('obj_wall')
wall.x = 350

ground = object_new('obj_ground')
ground.y = -250

player = object_new('obj_player')
player.x = -100

enemy = object_new('obj_enemy')

bubble_spawner = object_new('obj_bubble_spawner')
{% endcode %}

{% code rm_level2/start %}
# Enter the start code for rm_level2 here.
background = object_new('obj_background')
player = object_new('obj_player')
player2 = object_new('obj_player2')
player2.x = 100

ground = object_new('obj_ground')
ground.y = -195
{% endcode %}

### Object Scripts 
{% code obj_player/start %}
sprite = sprite_new('spr_player_left')

xVelocity = 0
yVelocity = 0

maxVelocity = 5
gravityForce = 0.05
frictionForce = 0.025
{% endcode %}


{% code obj_player/loop %}
if key_is_pressed('right'):
  xVelocity = xVelocity + 0.1
  sprite = sprite_new('spr_player_right')
if key_is_pressed('left'):
  xVelocity = xVelocity - 0.1
  sprite = sprite_new('spr_player_left')
if key_is_pressed('up'):
  self.y = self.y + 3
  yVelocity = yVelocity + 3

if xVelocity > maxVelocity:
  xVelocity = maxVelocity
elif xVelocity < -maxVelocity:
  xVelocity = -maxVelocity
  
if xVelocity > 0:
  xvelocity = xVelocity - frictionForce
elif xVelocity < 0:
  xVelocity = xVelocity + frictionForce

if xVelocity < frictionForce and xVelocity > -frictionForce:
  xVelocity = 0
  
if yVelocity > maxVelocity:
  yVelocity = maxVelocity
elif yVelocity < -maxVelocity:
  yVelocity = -maxVelocity

if yVelocity > 0:
  yVelocity = yVelocity - gravityForce

if yVelocity < gravityForce and yVelocity > -gravityForce:
  yVelocity = 0

self.x = self.x + xVelocity
self.y = self.y + yVelocity

if collision_check(self, 'obj_enemy'):
  destroy(self)

if collision_check(self, 'obj_bubble'):
  bubble = collision_check(self, 'obj_bubble')
  destroy(bubble)
  yVelocity = maxVelocity

if collision_check(self, 'obj_enemy_balloon'):
  yVelocity = maxVelocity

if collision_check(self, 'obj_wall'):
  xVelocity = -xVelocity

if collision_check(self, 'obj_ground'):
  yVelocity = -yVelocity
else:
  yVelocity = yVelocity - gravityForce
{% endcode %}

{% code obj_enemy/start %}
# Enter the start code for obj_enemy here.
sprite = sprite_new('spr_enemy')
balloon = object_new('obj_enemy_balloon')

timer = 0
direction = "up"
{% endcode %}

{% code obj_enemy/loop %}
# Enter the loop code for obj_enemy here.

balloon.x = self.x
balloon.y = self.y + 30

if collision_check(balloon, 'obj_player'):
  destroy(balloon)
  destroy(self)

timer = timer + 1

if timer == 60:
  if direction == "up":
    direction = "down"
  elif direction == "down":
    direction = "up"
  timer = 0

if direction == "up":
  self.y = self.y + 1
elif direction == "down":
  self.y = self.y - 1
{% endcode %}

{% code obj_bubble/start %}
# Enter the start code for obj_bubble here.
sprite = sprite_new('spr_bubble')
{% endcode %}

{% code obj_bubble/loop %}
# Enter the loop code for obj_bubble here.
self.y = self.y + 1
{% endcode %}

{% code obj_enemy_balloon/start %}
# Enter the start code for obj_enemy_balloon here.
sprite = sprite_new('spr_enemy_balloon')
{% endcode %}

{% code obj_bubble_spawner/start %}
# Enter the start code for obj_bubble_spawner here.
import random
timer = 0

self.y = -300
{% endcode %}

{% code obj_bubble_spawner/loop %}
# Enter the loop code for obj_bubble_spawner here.
timer = timer +1

if timer == 300:
  bubble = object_new('obj_bubble')
  randomOffset = random.randint(-300, 300)
  bubble.x = self.x + randomOffset
  bubble.y = self.y
  timer = 0
{% endcode %}

{% code obj_wall/start %}
# Enter the start code for obj_wall here.
sprite = sprite_new('spr_wall')
{% endcode %}

{% code obj_ground/start %}
# Enter the start code for obj_ground here.
sprite = sprite_new('spr_ground')
{% endcode %}

{% code obj_background/start %}
# Enter the start code for obj_background here.
sprite = sprite_new('spr_background')
{% endcode %}

### Modifiend for 2 player!
{% code obj_player2/start %}
# Enter the start code for obj_player2 here.
sprite = sprite_new('spr_enemy')
balloon = object_new('obj_enemy_balloon')

xVelocity = 0
yVelocity = 0

maxVelocity = 5
gravityForce = 0.05
frictionForce = 0.025
{% endcode %}

{% code obj_player2/loop %}
# Enter the loop code for obj_player2 here.
balloon.x = self.x
balloon.y = self.y + 35

if key_is_pressed('s'):
  xVelocity = xVelocity + 0.1
if key_is_pressed('a'): #d
  xVelocity = xVelocity - 0.1
if key_is_pressed('w'):
  self.y = self.y + 3
  yVelocity = yVelocity + 3

if xVelocity > maxVelocity:
  xVelocity = maxVelocity
elif xVelocity < -maxVelocity:
  xVelocity = -maxVelocity
  
if xVelocity > 0:
  xvelocity = xVelocity - frictionForce
elif xVelocity < 0:
  xVelocity = xVelocity + frictionForce

if xVelocity < frictionForce and xVelocity > -frictionForce:
  xVelocity = 0

if yVelocity > maxVelocity:
  yVelocity = maxVelocity
elif yVelocity < -maxVelocity:
  yVelocity = -maxVelocity

if yVelocity > 0:
  yVelocity = yVelocity - gravityForce

if yVelocity < gravityForce and yVelocity > -gravityForce:
  yVelocity = 0

self.x = self.x + xVelocity
self.y = self.y + yVelocity

if collision_check(self, 'obj_enemy'):
  destroy(self)

if collision_check(self, 'obj_bubble'):
  bubble = collision_check(self, 'obj_bubble')
  destroy(bubble)
  yVelocity = maxVelocity


if collision_check(self, 'obj_wall'):
  xVelocity = -xVelocity

if collision_check(self, 'obj_ground'):
  yVelocity = -yVelocity
else:
  yVelocity = yVelocity - gravityForce

{% endcode %}

Wow! That's a lot of code! 
Please try your best to not simply copy this code, but use it to find out why your code does not work!

Have a great week, and I'l "see" you on Saturday! :)

## March 14, 2020

Hey guys!

So as you've figured out by now, Reidmount was closed this past Saturday, and will be closed at least until April 4th.

First thing's first, make sure you finish off the Balloon Fight tutorial!!

Once that's done, there are a few options.

The first option is to work, at your leisure, on some of your Python fundamentals; the following websites can help with that!
https://www.codecademy.com/
https://www.codingame.com/
https://codecombat.com/
https://codingbat.com/python

The second option is to try to implement some of the features we wanted to implement in our Balloon Fight game. Here were your suggestions:

2 players (working on that now)
Players can shoot gumballs at eachother
A boss
Power ups: Super speed, more bounciness, God Mode.

Regardless of your choice, when we get back, we will get everyone up to speed with what's going on.

FOR NEXT WEEK I will post a follow through lesson for finishing of the two player implementation.

## January 25, 2020

Hello Balloon Fighters!
You guys are well on your way to this course, most of you finishing the week on lesson 4/5! One thing to note is that in **Lesson 5** when you make the **obj_balloon_spawner** the tutorial misses something.. You need to add the **object_new(...)** code in your game for the spawner to work, like this:

{% code game/start %}
...
bubble_spawner = object_new('obj_bubble_spawner')
{% endcode %}

Then in your **obj_bubble_spawner** move it down so that the bubbles spawn at the bottom of the screen:

{% code obj_bubble_spawner/start %}
...
self.y = -300
{% endcode %}

That's it for this week! See you all next week

## January 18, 2020

Hey guys! This week we started the balloon fight course! Most of you got to Level 2/3, which was awesome!
Remember that when going through the tutorial, when you see code that you already wrote, don't copy it down again, but use it as a guide to see where to write new code!

See you next week!

## January 11, 2020

Hey guys! Welcome to a new semester at Reidmount! I'm going to take this post to post all of the code for the completed space game!!

{% code game/start %}
room_set('rm_level1')
score = 0

loa = []
{% endcode %}

{% code rm_level1/start %}
bg = object_new('obj_background')
player = object_new('obj_player')

object_new('obj_spawner')
{% endcode %}

{% code rm_level1/loop %}
if game.score >= 50:
  room_set('rm_victory')
{% endcode %}

{% code rm_victory/start %}
object_new('obj_victory')
{% endcode %}

{% code rm_game_over/start %}
object_new('obj_game_over')
{% endcode %}

{% code obj_player/start %}
sprite = sprite_new('spr_player')
health = 3
godMode = False
{% endcode %}

{% code obj_player/loop %}

if key_is_pressed('right'):
  self.x = self.x + 3
  
elif key_is_pressed('up'):
  self.y = self.y + 3

elif key_is_pressed('left'):
  self.x = self.x - 3
  
elif key_is_pressed('down'):
  self.y = self.y - 3
  

if key_was_pressed('space'):
  if godMode:
    godMode = False
    for a in game.loa:
      object_destroy(a)
      game.score += 1
  projectile = object_new('obj_projectile')
  projectile.x = self.x
  projectile.y = self.y

if health <= 0:
  object_destroy(self)
  room_set('rm_game_over')
 
 
  
shield = collision_check(self, 'obj_shield')
if shield:
  object_destroy(shield)
  health += 1
  
ammo = collision_check(self,'obj_ammo')
if ammo:
  object_destroy(ammo)
  godMode = True
{% endcode %}

{% code obj_projectile/start %}
sprite = sprite_new('spr_projectile')
{% endcode %}

{% code obj_projectile/loop %}
self.y = self.y + 4

asteroid = collision_check(self, 'obj_asteroid')
if asteroid:
  object_destroy(asteroid)
  object_destroy(self)
  
enemy = collision_check(self, 'obj_enemy')
if enemy:
  enemy.health -= 1
  object_destroy(self)
  
  
if self.y > 400:
  object_destroy(self)
{% endcode %}

{% code obj_asteroid/start %}
sprite = sprite_new('spr_asteroid')
{% endcode %}

{% code obj_asteroid/loop %}
self.y = self.y - 3


player = collision_check(self, 'obj_player')
if player:
  player.health = player.health-1
  object_destroy(self)
  
  
if self.y < -600:
  object_destroy(self)
{% endcode %}

{% code obj_enemy/start %}
sprite = sprite_new('spr_enemy')
self.y = 300  
health = 3
{% endcode %}

{% code obj_enemy/loop %}
self.y = self.y - 3
{% endcode %}

{% code obj_background/start %}
sprite = sprite_new('spr_background')
{% endcode %}

{% code obj_spawner/start %}
import random

timer = 0

self.y = 500
{% endcode %}

{% code obj_spawner/loop %}
timer = timer + 1

if timer > 60:
  asteroid = object_new('obj_asteroid')
  asteroid.x = random.randint(-280, 280)
  asteroid.y = 300
  game.loa.append(asteroid)
  print(game.loa)
  
  chance_shield = random.randint(0,100)
  if chance_shield < 10:
    shield = object_new('obj_shield')
    shield.x = random.randint(-280, 280)
  
  chance_ammo = random.randint(0,100)
  if chance_ammo < 10:
    ammo = object_new('obj_ammo')
    ammo.x = random.randint(-280,280)
  timer = 0
{% endcode %}

{% code obj_shield/start %}
sprite = sprite_new('spr_shield_pickup')
self.y = 300
{% endcode %}

{% code obj_shield/loop %}
self.y = self.y - 3
{% endcode %}

{% code obj_ammo/start %}
sprite = sprite_new('spr_ammo_pickup')

self.y = 300
{% endcode %}

{% code obj_ammo/loop %}
self.y = self.y - 3
{% endcode %}

{% code obj_victory/start %}
sprite = sprite_new('spr_victory')
{% endcode %}

{% code obj_game_over/start %}
sprite = sprite_new('spr_game_over')
{% endcode %}

Well, that's everything! Hope you guys had fun making that!! The next game will also be lots of fun! :)

## November 23, 2019

Hello Space Adventurers!

So most of you guys are coming to and end! As requested, we will be finishing off the game independently so we can work at our own paces!
By the looks of it, most of you will be done by next week, leaving us plenty of time to implement some really cool features!

See you guys next week!

## November 16, 2019

Hey guys!

This week in class, we worked more independently so that I could help those of you who needed to catch up! We worked on lesson 7 (A new challenger approaches) and modified it a little bit so it would work with our system of spawning objects. 

Here's is how we spawn our **obj_enemy** object, instead of using the **enemyTimer**

{% code obj_spawner/loop %}
if timer > 60:
  asteroid = object_new('obj_asteroid')
  ...
  
  chance_shield = random.randint(0,100)
  if chance_shield < 10:
    ...

  chance_ammo = random.randint(0,100)
  if chance_ammo < 10:
    ...

  chance_enemy = random.randint(0, 100)
  if chance_enemy < 5:
    enemy = object_new('obj_enemy')
    enemy.x = random.randint(-280, 280)
    
  timer = 0
{% endcode %}

And that's all folks. Next week we begin to put the finishing touches on our game, creating new rooms and giving the players an opportunity to actually win or lose.

See you next week! 

## November 2 & 9, 2019

Waddup Invaders?! 

So as you guys know, I was away on November 2nd, so this week we just made sure everyone was on the same page, there were no errors in the code, and we understood what was taught in November 2nd.

So this week we took another look at random numbers to see if we could use them to spawn different objects falling from the sky.

We began with 2 object **obj_ammo** and **obj_shield**, remembering that we actually had to create the new objects by pressing the green **+** next to the **Object Scripts** label. 

Now we need to ensure that they have an associated sprite. Let's also make sure they spawn above the screen so they will fall! Both objects will look like this:

{% code obj_ammo&shield/start %}
sprite = sprite_new('spr_xxx')
{% endcode %}

Let's make sure that, when they spawn, they will actually fall! In both objects, place the following code in the loop tab

{% code obj_ammo&shield/loop %}
self.y = self.y - 4
{% endcode %}

Now all that's left to do is spawn the two new objects!

We decided as a class to go with the method of "Every second, the objects will have a X% chance of spawning"... Here's how to implement that.

In our **obj_spawner** loop tab, below where we spawn our asteroids, this is the code we came up with:

{% code obj_spawner/loop %}
if timer > 60:
  asteroid = object_new('obj_asteroid')
  ...
  
  chance_shield = random.randint(0,100)
  if chance_shield < 10:
    shield = object_new('obj_shield')
    shield.x = random.randint(-280, 280)
  
  chance_ammo = random.randint(0,100)
  if chance_ammo < 10:
    ammo = object_new('obj_ammo')
    ammo.x = random.randint(-280,280)
  
  timer = 0
{% endcode %}

This code says that every time the timer reaches 60 (meaning 1 second has passed) spawn an asteroid. Then generate 2 random numbers, both between 0 and 100. If the corresponding random number is less than 10 (and there's actually a 10% chance of that happening) then spawn the corresponding object. Finally reset the timer to 0.

That's it! Next class we'll look at spawning our Enemy ships!


## October 26, 2019

Waddup Invaders of Space?!
This week was all about **collisions**! Whenever 2 objects are going collide, we need to ask ourselves: Which object is colliding with which object? For example, is my missile colliding with the enemy, or my enemy colliding with the missile. Which ever object is **colliding** with the other one is where we put the code! Let's begin with an asteroid and the player ship. 

We all agreed in class that the asteroid collides with the player ship, so in **obj_asteroid/loop** we will place the following code:

{% code obj_asteroid/loop %}
...
player = collision_check(self, 'obj_player')
if player:
  player.health = player.health-1
  object_destroy(self)
{% endcode %}

Let's break this down! We set **player** to be equal to the value given back by checking if there was a collision. If there was a collision in this frame, we return the actual player object that hit us, if not, it returns **False** and we ignore it!
If we were hit by the player, we remove some player health and destroy the asteroid that hit the player!

Next, we look at a collision between our projectile and the asteroid. In class we agreed that projectiles collide with asteroids, so in **obj_projectile** we write:

{% code obj_projectile/loop %}
...
asteroid = collision_check(self, 'obj_asteroid')
if asteroid:
  object_destroy(asteroid)
  object_destroy(self)
...
{% endcode %}

Finally, to make the health work, we need to add 2 more lines of code:

{% code obj_player/start %}
...
health = 3 # or any number we want
{% endcode %}

{% code obj_player/loop %}
...
if health &lt;= 0:
  object_destroy(self)
{% endcode %}

And that's it! Wow, our game is really coming together! See you guys next week! :D

## October 19, 2019

Hey Space Invaders! This week we created an asteroid feild!!!

The first thing we did was created an object script called **obj_spawner**
In that object, we set up 3 things:
1. The ability to use random numbers
2. A timer that will spawn asteroids (and eventually other objects) at a certain interval.
3. The objects y position so we won't see that pesky blue box!

Here's the start code for **obj_spawner**
{% code obj_spawner/start %}
# Gives us the ability to use random numbers
import random
# Sets up a timer for us to spawn asteroids
timer = 0
# Get rid of the blue box
self.y = 500
{% endcode %}

Now we need to increment the timer every frame! That means the timer will increment 60 times a second! If we want to spawn an asteroid every second, we need to check to see if the timer ever gets bigger than 60, if it does, we spawn an asteroid. Let's see how that looks!

{% code obj_spawner/loop %}
# Increment the timer every frame
timer = timer + 1

# If the timer passes 60 (it's been about 1 second)
if timer > 60:
  # spawn an asteroid
  asteroid = object_new('obj_asteroid')
  # Use a random number generator to ensure that the asteroids spawn all over the screen!
  asteroid.x = random.randint(-280, 280)
  # Make the asteroids spawn above the beginning of the screen
  asteroid.y = 300
  # Reset the timer!
  timer = 0
{% endcode %}

And that's it! Next class will be all about collisions. Our game will really start coming together after next class! Have a good week guys!

## October 5, 2019

Hello coders! This week in class, gave our spaceship the ability to shoot missiles!

First off, we need to create a projectile and put it on the screen! Make sure that **obj_projectile** knows what sprite to render:

{% code obj_projectile/start %}
sprite = sprite_new('spr_projectile')
{% endcode %}

Now, we want the player to be able to press the **space** key to shoot the missiles, which means that in our **obj_player** script, where we tell PixelPad to move our spaceship if we press the arrow keys, we need to tell it to shoot a missile when we press the space key!

This is how you do that:

{% code obj_player/loop %}
...
if key_was_pressed('space'):
  projectile = object_new('obj_projectile')
  projectile.x = self.x
  projectile.y = self.y
{% endcode %}

When we run that code, we will notice that misisles appear, but they don't go anywhere! Let's fix that.

We need to put some code in the **obj_projectile** script that tells it to always go up! So in the loop code, we place the following line:

{% code obj_projectile/loop %}
self.y = self.y + 4
{% endcode %}

4 is the speed the missile will travel, play around with that number and make sure you like the feel of it!

That's it for this class, next class we look at commenting!

See you guys in 2 weeks :)

## September 28, 2019

Hey guys! This week we made the spaceship move when we pressed on the arrow keys! Finally we have some working mechanics to this game!

The first thing we did was look at the documentation for a way to make something move when we press down a key on the keyboard. The **key_is_pressed()** seemed promising, and we even saw there was an example in the documentation of how to use it!

So in the **obj_player's loop** code, we placed the following

{% code obj_player/loop %}
if key_is_pressed('right'):
  self.x = self.x + 3
  
elif key_is_pressed('up'):
  self.y = self.y + 3

elif key_is_pressed('left'):
  self.x = self.x - 3
  
elif key_is_pressed('down'):
  self.y = self.y - 3
{% endcode %}

So **if** a **key is pressed** that we specify, then move the player in a certain direction. We specify that direction with statements like **self.x = self.x + 3** signifying movement to the right.

If you have any questions, feel free to ask!

Next week we will either do missals or asteroids, up to you!

See you then!

## September 21, 2019

Hey guys! So this week was our very first introduction to coding in **Python!**

During class, we accomplished 3 things:
1. We made objects appear on the screen
2. We gave those objects sprites (pictures)
3. We moved those objects around

Let's look at how we did those things!

The first thing we did was make our player object appear, we did that by writing the following code in the **game** script!

{% code game/start %}
player = object_new('obj_player')
{% endcode %}

Next we added a sprite to our player by placing the following code in the **obj_player** script

{% code obj_player/start %}
sprite = sprite_new('spr_player')
{% endcode %}

Finally, we were able to move the object around by changing the x and y **properties** of the object, like so

{% code game/start %}
player = object_new('obj_player')
# Move player to the right
player.x = 200
# Move player down
player.y = -200
{% endcode %}

And that's it! See, coding is pretty easy once we get the hang of it! Next class we will look at moving our player around with the keys on our keyboard! See you guys next week!


## September 14, 2019

What's up coders?! This week we spoke about what we were going to be doing over this semester. We went over some basic rules of coding class, and got to know each other a little bit!

One thing I have to say is that I think I lied to you guys! We won't be making the space game (unless you really want to!), but we will actually be making an RPG game! We can talk about it next week.

Have a great week :)
