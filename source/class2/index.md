---
title: SPY2 10:00
name: class2
order: 2
icon: fas fa-lemon
date: 2019-09-13 16:23:44
---

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
# What direction (-1 means down, 1 means up)
#      (x)       (-1 means left, 1 means right)
self.direction = -1
{% endcode %}

Now, in the Loop of Enemy1, we have some code that checks to see if we have traveled too far from our origin. If we have, we change the direction!

{% code Enemy1/Loop %}
# If my object is more than "50px" away from where it started,
# Then change the direction
if abs(self.y - self.originalY) > 50:
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

We spent the last bit of class on movement, but I'm just going to go over all of that tomorrow!

Have a great day, I'll see you all tomorrow!

## July 15, 2020

Hey guys! Today's class was all about **Rooms** in PixelPad. A Room is basically a level in your game, but other things can be levels too like the Game Over screen, then Menu screen, or even the Victory screen! 

The first thing we did was create a Victory screen using [Photopea](https://www.photopea.com/).

Once finished, we created a new Room called **Level1** by pressing the **+** next to the **Rooms** label. 

Now you are going to move **ALL** of the code from your Game script to your Level1 script in both the Start and Loop tabs!

Now, all you need to do is put one line of code in your game to make everything work the way it did before!

{% code Game/Start %}
room_set('Level1')
{% endcode %}

Now we want to create a room for the Victory Screen, we will call it **RoomDone**

We only put 2 lines of code in RoomDone that displays the victory screen:

{% code LevelDone/Start %}
victory = Victory()
victory.sprite = sprite_new('victory.png')
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
    print("You win!")
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
# Creates the fish Game Object
self.fish = Fish()
# 'Binds' the picture to the game object
self.fish.sprite = sprite_new('fish.png')
# Moves the game object 230px to the left!
self.fish.x = -230

self.hook = Enemy1()
self.hook.sprite = sprite_new('enemy1.png')
self.hook.x = 100
self.hook.y = 100

self.hook2 = Enemy1()
self.hook2.sprite = sprite_new('enemy1.png')
self.hook2.x = -110
self.hook2.y = 179

self.bomb = Enemy2()
self.bomb.sprite = sprite_new('enemy2.png')
self.bomb.x = -50
self.bomb.y = -100

self.bomb1 = Enemy2()
self.bomb1.sprite = sprite_new('enemy2.png')
self.bomb1.x = 150

self.poison = Enemy3()
self.poison.sprite = sprite_new('enemy3.png')
self.poison.x = 100
self.poison.y = -150

self.poison2 = Enemy3()
self.poison2.sprite = sprite_new('enemy3.png')
self.poison2.x = -200
self.poison2.y = 150

self.poison3 = Enemy3()
self.poison3.sprite = sprite_new('enemy3.png')
{% endcode %}

The last thing we talked about were comments (the # symbol)
Comments in programming are a way to communicate with other programmers (usually yourself) what the code actually does. It's meant to be written in a language that even non-programmers understand (so English for most of us).

As I mentioned in class, comments won't be looked at for this game, but will be looked at in future games, so get used to them!

Have a great day, and I'll see you guys tomorrow :) 

## July 10, 2020

Hey guys! So today we learned how to get our fish to move on the screen.
First thing's first, we need to make sure our fish appears on the screen.This is the code to do that

{% code Game/START %}
#  ...
self.fish = Fish()
self.fish.sprite = sprite_new('fish.png')
{% endcode %}

Notice the **self.** at the beginning of fish, that's important. Without it, we won't be able to move our fish in the **Loop** code.

Now, here is the code we wrote to move the fish whenever we press w, a, s, or d.

{% code Game/LOOP %}
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

{% code Game/START %}
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