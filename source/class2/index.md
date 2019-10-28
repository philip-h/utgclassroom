---
title: PY201 10:00
name: class2
icon: fas fa-gamepad
date: 2019-09-13 16:27:26
---
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

## October 12, 2019

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