---
title: PY301 09:00
name: class1
icon: fas fa-lemon
date: 2019-09-13 16:23:44
---
## April 11, 2020

Hey guys! 
So from now on, we will be continuing our classes online using Zoom.

Your work for this week was to ensure that you are all caught up. 

Below is the code that we've done together since ending our in-person classes. If you have any questions, please don't hesitate to ask questions on the form: https://staugistine.underthegui.com/forum

Also, here is the link to the PowerPoint:
https://drive.google.com/file/d/1kiTxvUoLtsm2HLoPCLSgJMCSVWsKSN5H/view?usp=sharing

### Main Script
{% code game/start %}
bg = object_new('obj_background')

robobase = object_new('obj_robobase')
robobase.y = -180

dinobase = object_new('obj_dinobase')
dinobase.y = 180

robobutton = object_new('obj_robobutton')
robobutton.y = -180
robobutton.x = -200

dinobutton = object_new('obj_dinobutton')
dinobutton.y = 180
dinobutton.x = 200
{% endcode %}

### Object Scripts
{% code obj_background/start %}
# Enter the start code for obj_background here.
sprite = sprite_new('spr_background')
{% endcode %}

{% code obj_robobase/start %}
# Enter the start code for obj_robobase here.
sprite = sprite_new('spr_robobase')
sprite_height = 0.25
sprite_width = 0.25

# 10k Health for the base, setup healthbar
health = 10000
healthbar = object_new('obj_healthbar')
originalWidth = healthbar.sprite_width
maxHealth = health

healthbar.sprite_width = 10

# Should match obj_robot
team = 'robot'
type = 'base'
{% endcode %}

{% code obj_robobase/loop %}
# Enter the loop code for obj_robobase here.

# Destroy base if health is depleated
if health < 0:
  destroy(self)
  
# Setup healthbar
healthbar.y = self.y + 50
healthbar.x = self.x 

healthbar.sprite_width = originalWidth * (health/maxHealth)
{% endcode %}

{% code obj_dinobase/start %}
# Enter the start code for obj_dinobase here.
sprite = sprite_new('spr_dinobase')
sprite_height = 0.12
sprite_width = 0.12

# 10k Health for the base, setup healthbar
health = 10000
healthbar = object_new('obj_healthbar')
originalWidth = healthbar.sprite_width
maxHealth = health

# Should match obj_dino
team = 'dino'
type = 'base'
{% endcode %}

{% code obj_dinobase/loop %}
# Enter the loop code for obj_dinobase here.

# Destroy base if health is depleated
if health < 0:
  destroy(self)
  
healthbar.y = self.y + 50
healthbar.x = self.x 

healthbar.sprite_width = originalWidth * (health/maxHealth)
{% endcode %}

{% code obj_robobutton/start %}
# Enter the start code for obj_robobutton here.
sprite = sprite_new('spr_robobutton')

import random
{% endcode %}

{% code obj_robobutton/loop %}
# Enter the loop code for obj_robobutton here.

# Check if we clicked on the button
if mouse_was_pressed('left'):
  if abs(self.x - mouse_x()) < 40 and abs(self.y - mouse_y()) < 40:
    # Spawn a robot
    robot = object_new('obj_robot')
    robot.x = 0
    robot.y = -180
    
    # Pick a random bridge
    bridgeSelected = random.randint(1,2)
    
    # And go to that bridge
    if bridgeSelected == 1:
      robot.destinationX = 190
      robot.destinationY = 0
    else:
      robot.destinationX = -190
      robot.destinationY = 0
{% endcode %}

{% code obj_dinoutton/start %}
# Enter the start code for obj_dinobutton here.
sprite = sprite_new('spr_dinobutton')

spawnTimer = 0

import random
{% endcode %}

{% code obj_dinobutton/loop %}
# Enter the loop code for obj_dinobutton here.

spawnTimer = spawnTimer + 1

# Spawn a dino every thrid of a second
if spawnTimer >= 20:
  dino = object_new('obj_dino')
  dino.x = 0
  dino.y = 180
  spawnTimer = 0
  
  # Pick a random bridge
  bridgeSelected = random.randint(1,2)
  
  # And go to that bridge
  if bridgeSelected == 1:
    dino.destinationX = 190
    dino.destinationY = 0
  else:
    dino.destinationX = -190
    dino.destinationY = 0
{% endcode %}

{% code obj_robot/start %}
# Enter the start code for obj_robot here.

# Setup animations
sprite_sheet = sprite_new('sprs_robos',5,7)
walk_right = animation_new(sprite_sheet, 12, 0, 6)

animation_set(self, walk_right)

# Where are we headed to?
destinationX = 0
destinationY = 0

# Should match obj_robobase
team = "robot"
type = "unit"

# Setup healthbar
health = 100
healthbar = object_new('obj_healthbar')
originalWidth = healthbar.sprite_width
maxHealth = health
{% endcode %}

{% code obj_robot/loop %}
# Enter the loop code for obj_robot here.

# Head to the current destination (one of the bridges)
if self.x < destinationX:
  self.x = self.x + 1
elif self.x > destinationX:
  self.x = self.x - 1
  
if self.y < destinationY:
  self.y = self.y + 1
elif self.y > destinationY:
  self.y = self.y - 1

# Once we get to the bridge, go to the dino base
if self.x == destinationX and self.y == destinationY:
  destinationX = 0
  destinationY = 180

# If we collide with a dino, take away it's health
if collision_check_all(self, 'unit'):
  for enemy in collision_check_all(self, 'unit'):
    if enemy.team != team:
      enemy.health = enemy.health - 5

# If we collide with the dino base, take away it's health!
if collision_check_all(self, 'base'):
  for base in collision_check_all(self, 'base'):
    if base.team != team:
      base.health = base.health - 5

# If we are out of health, we die!
if health <= 0:
  destroy(healthbar)
  destroy(self)
  

# Setup healthbar
healthbar.y = self.y + 20
healthbar.x = self.x

healthbar.sprite_width = originalWidth * (health/maxHealth)
{% endcode %}

{% code obj_dino/start %}
# Enter the start code for obj_dino here.

# Setup animations
sprite_sheet = sprite_new('sprs_dinos',5,5)
walk_right = animation_new(sprite_sheet, 12, 1, 5)

animation_set(self, walk_right)

# Make the dino a bit bigger
sprite_height = 1.5
sprite_width = 1.5

# Where are we headed to?
destinationX = 0
destinationY = 0

# Should match obj_dinobase
team = "dino"
type = "unit"

# Setup heathbar
health = 100
healthbar = object_new('obj_healthbar')
originalWidth = healthbar.sprite_width
maxHealth = health
{% endcode %}

<!-- => -->

{% code obj_dino/loop %}
# Enter the loop code for obj_dino here.

# Head to the current destination (one of the bridges)
if self.x < destinationX:
  self.x = self.x + 1
elif self.x > destinationX:
  self.x = self.x - 1
  
if self.y < destinationY:
  self.y = self.y + 1
elif self.y > destinationY:
  self.y = self.y - 1
  
# Once we get to the bridge, go to the dino base
if self.x == destinationX and self.y == destinationY:
  destinationX = 0
  destinationY = -180
  
# If we collide with a robot, take away it's health
if collision_check_all(self, 'unit'):
  for enemy in collision_check_all(self, 'unit'):
    if enemy.team != team:
      enemy.health = enemy.health - 5
      
# If we collide with a robot base, take away it's health
if collision_check_all(self, 'base'):
  for base in collision_check_all(self, 'base'):
    if base.team != team:
      base.health = base.health - 5

# If we are out of health, we die!
if health <= 0:
  destroy(healthbar)
  destroy(self)
  
# Setup healthbar
healthbar.y = self.y + 20
healthbar.x = self.x

healthbar.sprite_width = originalWidth * (health/maxHealth)
{% endcode %}

<!-- => -->

{% code obj_healthbar/start %}
# Enter the start code for obj_healthbar here.
sprite = sprite_new('spr_healthbar')
# This line is needed so the helathbar can shrink
sprite_width = 1
{% endcode %}

Wow! That's a lot of code! 
Please try your best to not simply copy this code, but use it to find out why your code does not work!

Have a great week, and I'll "see" you on Saturday! :)

## March 14, 2020

Hey guys!

So as you've figured out by now, Reidmount was closed this past Saturday, and will be closed at least until April 4th.

First thing's first, try to finish lesson 5 by the time we get back together!

Once that's done, here are a few options to work, at your leisure, on some of your Python fundamentals; the following websites can help with that!
https://www.codecademy.com/
https://www.codingame.com/
https://codecombat.com/
https://codingbat.com/python


FOR NEXT WEEK I will post a follow-through lesson for finishing up to Chapter 5!
Have a great march break guys!

## January 25, 2020

Hello Clashers!
Let's take a look at how to do something then the user clicks on a button.
I'm going to do the code for the obj_robobutton, but just make sure that you do the code for the button that's on the bottom of your screen!

So the first thing we can do is check to see whether or not we actually click on the screen

{% code obj_robobutton/loop %}
if mouse_was_pressed('left'):
  print("We pressed the mouse!")
{% endcode %}

Now, if you click anywhere on the screen, you should see "We pressed the mouse!" printed to the console.
But we only want to print something if we click on the robo button! Let's see how to do that!

{% code obj_robobutton/loop %}
if mouse_was_pressed('left'):
  if abs(self.x - mouse_x()) < 40 and abs(self.y - mouse_y()) < 40:
    print("pressed robobutton")
{% endcode %}

Now it will only print something if we press the robo button!

The last thing we did was upload our sprite sheet for the actual robot character (and dino chararcter)!
In **obj_robot** we began to setup the animation

{% code obj_robot/start %}
sprite_sheet = sprite_new('sprs_robos',5,7)
walk_right = animation_new(sprite_sheet, 12, 0, 6)
{% endcode %}

**NOTE** IF you started with Dino's, then the sprite_new() function would take the numbers (...,5,5) not (...5,7)

That's it for this week! Next week we'll start spawning robots (or dinos)

## January 18, 2020

What's up software developers?
So this week, we began to setup our Clash Royale mobile game!
The first thing you guys will need are the sprites:
https://drive.google.com/drive/u/0/folders/1Ox6JfSpD9Y1YkCtxvq4KdacANm7bvRNe

All we did this week was upload the sprites to PixelPad (making sure to give them good names), then place a background, the two base sprites, and the two button sprites on the screen just like in Clash Royale.

Here's what the code looks like, remembering that for this code to work, I created the necessary objects already!

{% code game/start %}
object_new('obj_background')

robobase = object_new('obj_robobase')
robobase.y = -180

dinobase = object_new('obj_dinobase')
dinobase.y = 

robobutton = object_new('obj_robobutton')
robobutton.y = -180
robobutton.x = -200

dinobutton = object_new('obj_dinobutton')
dinobutton.y = 180
dinobutton.x = 200
{% endcode %}

That's all for now! Next week, we will see how to check whether or not we actually click on a button!
See you next week!

## January 11, 2020

Hey guys! Welcome to a new semester at Reidmount! I'm going to take this post to post all of the code for the completed Fruit Ninja game!!

{% code rm_game/start %}
score = 0

room_set('rm_game')

import random 
shakeDuration = 0

spawnBomb = True
spawnRate = 1
{% endcode %}

{% code rm_game/loop %}
shakeDuration -= (1/60)
if shakeDuration <= 0:
  shakeDuration = 0

camX = random.randint(-30,30) * shakeDuration
camY = random.randint(-30,30) * shakeDuration
camera_set(camX, camY)
{% endcode %}

{% code rm_game/start %}
game.score = 0
bg = object_new('obj_background')

fruit = object_new('obj_fruit')
fs = object_new('obj_fruitspawner')

s = object_new('obj_slicer')

score_txt = object_new('obj_text')
score_txt.align = "center"
score_txt.y = 180
score_txt.char_size = 0.6

time_left = 30


tl_txt = object_new('obj_text')
tl_txt.x = -220
tl_txt.y = 190
tl_txt.char_size = 0.4
{% endcode %}

{% code rm_game/loop %}
score_txt.nr = game.score
tl_txt.nr = time_left

time_left -= 1/60
if time_left <= 0:
  room_set("rm_end")
{% endcode %}

{% code rm_end/start %}
bg = object_new("obj_background")
bg.sprite = sprite_new("spr_menubackground")

score_txt = object_new('obj_text')
score_txt.align = "center"
score_txt.char_size = 1
score_txt.nr = game.score

timer = 0

import math
{% endcode %}

{% code rm_end/loop %}
if mouse_was_pressed("left"):
 room_set('rm_game')
 
timer += 0.1
score_txt.char_size = 2+(math.sin(timer))
{% endcode %}

{% code obj_fruit/start %}
import random

# movement
velX = random.randint(-3, 3)
velY = random.randint(12,16)

self.x = random.randint(-200, 200)

# sprite
r = random.randint(0, 3)
if r == 0:
  tag = "melon"
elif r == 1:
  tag = "strawberry"
elif r == 2:
  tag = "orange"
else: # elif r == 3:
  if game.spawnBomb:
    tag = "bomb"
  else:
    tag = "melon"

sprite = sprite_new('spr_'+tag)
{% endcode %}

{% code obj_fruit/loop %}
velY -= 0.25
self.y += velY
self.x += velX
{% endcode %}

{% code obj_fruitspawner/start %}
import random
timer = 0
self.y -= 300
{% endcode %}

{% code obj_fruitspawner/loop %}
timer += 1

if timer > (50 / game.spawnRate):
  timer = random.randint(0, 40)
  fruit = object_new('obj_fruit')
  fruit.y = self.y
{% endcode %}

{% code obj_slicer/start %}
sprite = sprite_new('spr_trailcircle')
sprite_width = 0.9
sprite_height = 0.9

import math
prevX = 0
prevY = 0

speedX = self.x - prevX
speedY = self.y - prevY
speed = math.sqrt(speedX * speedX + speedY * speedY)
{% endcode %}

{% code obj_slicer/loop %}
self.x = mouse_x()
self.y = mouse_y()

speedX = self.x - prevX
speedY = self.y - prevY
speed = math.sqrt(speedX * speedX + speedY * speedY)

if speed > 20:
  if resetTrail:
    resetTrail = False
  elif mouse_is_pressed('left'):
    for i in range(25):
      posX = prevX + speedX * i/25
      poxY = prevY + speedY * i/25
      trail = object_new('obj_slicetrail')
      trail.x = posX
      trail.y = poxY
      
    fruit = collision_check(trail, 'obj_fruit')
    if fruit:
      if fruit.tag == 'bomb':
        game.score = 0
        explosion = object_new('obj_explosion')
        explosion.x = fruit.x
        explosion.y = fruit.y
      else:
        game.score += 1
        splash = object_new('obj_splash')
        splash.x = fruit.x
        splash.y = fruit.y
        ss = sprite_new('spr_'+fruit.tag+'_splash', 7, 5)
        anim = animation_new(ss, 60, 2, 40)
        animation_set(splash, anim)
        
      fruit.type = destroyed
      object_destroy(fruit)
    
    
  prevX = self.x
  prevY = self.y
{% endcode %}

{% code obj_slicetrail/start %}
sprite = sprite_new('spr_trailcircle')
timer = 0

sprite_width = 1
sprite_height = 1
{% endcode %}

{% code obj_slicetrail/loop %}
timer += 1
if timer >= 30:
  object_destroy(self)
  
sprite_width = sprite_width - 1/30
sprite_height = sprite_height - 1/30
{% endcode %}

{% code obj_background/start %}
sprite = sprite_new('spr_background')
sprite_width = 0.8
sprite_height = 0.8
{% endcode %}

{% code obj_explosion/start %}
ss = sprite_new('spr_explosion', 4, 4)
anim = animation_new(ss, 20, 0, 16)
animation_set(self, anim)
sprite_width = 2
sprite_height = 2
game.shakeDuration = 1
object_destroy(self, 0.8)
{% endcode %}

{% code obj_splash/start %}
object_destroy(self, 1)
{% endcode %}

Well, that's everything! Hope you guys had fun making that!! The next game will also be lots of fun! :)

## November 23, 2019

Hey guys!
So your games are really starting to come together! Most of you were finishing up lesson 9 today, which is awesome! That gives us plenty of time to implement all the cool features you had in mind at the beginning of hte year.

Next class I will post all the working code for the Fruit Ninja game so you can compare!

One quick note, I noticed a lot of students were having trouble with the score animation at the end of the game!
In **rm_end** make sure your **start** tab has the following code:

{% code rm_end/start %}
score_txt = object_new('obj_text')
score_txt.align = 'center'
{% endcode %}

Or you will get errors out the wazoo!

See you next week :D

## November 16, 2019

Hey fruit attackers! This week we primarily worked on Lesson 8 - Animations! Keep on going! Reminder that when we finish the game through the tutorial that we will have time in class to add extra features that the class agrees on! I'm excited for that to happen! 

See you guys next week!

## November 2 & 9, 2019

Hey slashers! So as you guys know, I was away on November 2nd, so this week we just made sure everyone was on the same page, there were no errors in the code, and we understood what was taught in November 2nd. 

Most of you guys should be on the score lesson, making white numbers appear on the screen to keep track of our score and time. As always, I appreciate your behaviour when I was absent, and I heard nothing but good things from the teacher who supplied!

See you guys next week.

## October 26, 2019

What's up slashers?! Sorry once again for being late! You guys were awesome though getting all the tables and the chairs set up!

This week we started did Lesson 5 (linear interpolation)! This lesson made our slice trails look pretty good!

For those of you that were struggling this lesson, here is the obj_slicer loop code that got a lot of you confused!

{% code obj_slicer/loop %}
# Enter the loop code for obj_slicer here.

self.x = mouse_x()
self.y = mouse_y()

speedX = self.x - previousX
speedY = self.y - previousY

if mouse_is_pressed('left'):
  for i in range(25):
    posX = previousX + speedX * i/25
    posY = previousY + speedY * i/25
    trail = object_new('obj_slicetrail')
    trail.x = posX
    trail.y = posY
    fruit = collision_check(trail, "obj_fruit")
    if fruit:
      object_destroy(fruit)


previousX = self.x
previousY = self.y
{% endcode %}

Alright, that was the bulk of today's lesson! Hope you guys have a good Halloween and I'll see you next week!

## October 19, 2019

Hey Guys! This week was catch up / commenting week! The task for today was to comment **every** single line of code (including the spaces) for 2 reasons:
1. To show me that you know what's going on in class and you are not just copying down code
2. For you to see the lines that you do not understand so you can ask me (or another classmate!)

Next week we will work on "Linear Interpolation" so our obj_slicer looks cool!

## October 5, 2019

Hey guys! So today was a catch up day for the guys who missed class last week, and to ask any and all of your questions!

By the beginning of next week, you guys should all be done lesson 4 (The slice trail one). If you have any questions, ask away!

Next week in class, we will be going over commenting, what it is, what it's used for, and how do create them.

See you guys in 2 weeks!

## September 28, 2019

Hey guys, so I know that half the class was away this week, so we primarily focused on following the tutorial (the rest of lesson 2 and all of 3) for the Fruit Slasher's course! If you don't want to follow the tutorial, or want a more detailed explanations, then continue reading!

The first thing we did was create a fruit spawner object that can handle spawning fruit! I called it **obj_fruitspawner**. 

In **obj_fruitspawner** I moved it down by 300 pixels to get rid of the blue box, then set up a timer, like so

{% code obj_fruitspawner/loop %}
self.y = -300
timer = 0
{% endcode %}

Then in the **loop**, we tell the timer "Hey, increase by one every frame, and when you get to 50 (just under 1 second), spawn a fruit and reset the timer." This is what that code looks like

{% code obj_fruitspawner/loop %}
timer = timer + 1
if timer > 50:
  fruit = object_new('obj_fruit')
  timer = 0
{% endcode %}

And just like that, we are spawning fruit!

Now we have to talk about **random numbers**. Python gives us a **library** for creating random numbers, and we can use them in our games to make them feel more "alive". So in order to use random numbers, we need to **import** the library! 

As an example, let's look at our **obj_fruit** object and randomize the some the velocities! We'll modify the velocityY and add a velocityX so the fruits travel in a curve instead of a straight line.

{% code obj_fruit/start %}
import random
...
velocityX = random.randint(-3, 3)
velocityY = random.randint(12, 16)

self.x = random.randint(-200, 200)
{% endcode %}

So the above code tells PixelPad to start every fruit's life with a random initial velocity in both directions, and it starts it somewhere randomly along the bottom of the screen!

Now in our loop code, all we have to do is "hookup" the x velocity! This is what the **whole** loop code looks like

{% code obj_fruit/loop %}
# Gravity changes velocity
velocityY = velocityY + gravityFactor

# Velocity changes position
self.y = self.y + velocityY
self.x = self.x + velocityX
{% endcode %}

Awesome! We're almost done, we can also make the fruits random! If we choose a random number between 0 and 3 and we say "Hey, if the number happens to be a 2, make the fruit an orange..." We can do that for all the fruit!

Here is the new **obj_fruit** code:

{% code obj_fruit %}
# Enter the start code for obj_fruit here.

import random

fruit_choice = random.randint(0, 3)
if fruit_choice == 0:
  tag = "melon"
elif fruit_choice == 1:
  tag = "strawberry"
elif fruit_choice == 2:
  tag = "orange"
elif fruit_choice == 3:
  tag = "bomb"

sprite = sprite_new('spr_' + tag)
self.y = -300


gravityFactor = -0.3

velocityX = random.randint(-3, 3)
velocityY = random.randint(12, 16)

self.x = random.randint(-200, 200)
{% endcode %}

And that's it! Man, we had a busy week! Next week in class we will continue where we are, and I'll give you some time to catch up!

See you next week!

## September 21, 2019

Hey guys! This week we worked on getting some fruit to show up on the screen, and then we applied a little bit of physics to it!

To make some fruit appear on the screen we need to do two things:
1. Create and show an object that will be our fruit.
2. Give that object a sprite of a fruit.

To create an object, we press the green **+** and call our new object **obj_fruit**, then in the **game** script, we tell PixelPad to show the object, like so

{% code game/start %}
fruit = object_new('obj_fruit')
{% endcode %}

Then add the sprite to the object

{% code obj_fruit/start %}
sprite = sprite_new('spr_melon')
{% endcode %}

WOHOO, now a melon is on our screen! Let's add some physics to it!

The first thing we need to do is give the object some variables:
- gravityFactor: how strong is the gravity?
- velocityY: what is the current velocity in the Y direction?

At this point, we'll also move our sprite below the bottom of the screen because soon it will jump up:

{% code obj_fruit/start %}
...
self.y = -300

gravityFactor = -0.3
velocityY = 15
{% endcode %}

Now every **game loop** we need to modify the velocity by the gravity, then modify the fruit's position by the velocity, so the code looks like this:

{% code obj_fruit/loop %}
# Gravity changes velocity
velocityY = velocityY + gravityFactor
# Velocity changes position
self.y = self.y + velocityY
{% endcode %}

And that's it! Next class we'll make the melon not go just up and down, and we'll also take a look at **fruit spawners!**

Link to slides: [Slide Deck 1](https://docs.google.com/presentation/d/1X6K-Skc3Rzq3B4Jaexy-Uzq-t0eFzBbYoddrk4JvBc0/edit?usp=sharing)
Hello coders! Today in class, we spoke about the game that we are going to bu building: Fruit Ninja! I got you guys all set up on your PixelPad accounts so that next week we can get straight into coding!

## September 14, 2019

Hello coders! Today in class, we spoke about the game that we are going to be building: Fruit Ninja! I got you guys all set up on your PixelPad accounts so that next week we can get straight into coding!

Some ideas that were brought up in class for things to do throughout the semester:
1. Add different modes to the game.
2. Add special fruits (Like banana to freeze time)
3. Learn some HTML and CSS on the side

Enjoy your week, and I'll see you guys bright and early Saturday morning! 

