---
title: PY101 12:00
name: class4
icon: fas fa-rocket
date: 2019-09-13 16:27:34
---
## November 16, 2019

Sup Jr. Devs! 

This week we looked at Lesson 3, and you guys worked more or less independantly as I walked around and helped you with your code, and errors.

In a coming week, really soon, I will post all the code that you should have up till that point, but right now, all ow you are either ahead or where you should be! 

Great job guys!

I'll see you next week.

## November 2 & 9, 2019

So as you guys know, I was away on November 2nd, so this week we just made sure everyone was on the same page, there were no errors in the code, and we understood what was taught in November 2nd.

This week we worked on getting our player moving! Most of you guys did it, no problem! For those of you who struggled a little (or want a reminder) We put the following code in the **obj_player** script in the **loop** tab:

{% code obj_player/start %}
if key_is_pressed('right'):
  self.x = self.x + 3
  
elif key_is_pressed('up'):
  self.y = self.y + 3

elif key_is_pressed('left'):
  self.x = self.x - 3
  
elif key_is_pressed('down'):
  self.y = self.y - 3
{% endcode %}

You did this by following the Lesson 2 in the Space Game!

I'll see you guys next week when we talk about spawning asteroids! OUUUUU!

## October 26, 2019

Waddup Jr. Game Devs!

This week we added some asteroids to our game too!
First, just like last week, we need to make the asteroid object appear on the screen! So in our game script, we add:

{% code game/start %}
...
a = object_new('obj_asteroid')
{% endcode %}

When we run that, we see another blue box! Let's fix that! In our **obj_asteroid** file, add the following:

{% code obj_asteroid/start %}
sprite = sprite_new('spr_asteroid')
{% endcode %}

BAM! Now, let's move that sucker up so it looks like it's going to collide with our space ship!

{% code game/start %}
...
a = object_new('obj_asteroid')
a.y = 200
{% endcode %}

And that's it! Next week we tackle movement with our keyboard! See you guys then!

## October 19, 2019

Hey Jr. Coders!

This week we started **coding** for the first time in our lives! I'm so excited that you were all excited to begin coding! Let's get into it!

The first thing we did was make a space ship appear on the screen, then move it!

To make something appear on the screen, we use the **object_new(...)** function. 

So the the first line of code we wrote went into the **game/start** tab and looked like this:

{% code game/start %}
player = object_new('obj_player')
{% endcode %}

Now we notice a blue box appear on the center of the screen, but that's not the space ship I promised you! The reason this happens is because we tell PixelPad to **show** an object, but we don't tell the object itself what it should look like! 

We tell an object what it should look like using the **sprite_new(...)** function.

Meaning that the next thing we did was go into the **obj_player** script and add the following line of code:

{% code obj_player/start %}
sprite = sprite_new('spr_player')
{% endcode %}

Finally we talked about how to move the space ship around the screen!
We know that to move something left or right we use the **x** axis, and to move something up or down we use the **y** axis. So if we wanted to move our space ship 200px down, we would add the following line of code to our game script:

{% code game/start %}
player = object_new('obj_player')
player.y = -200
{% endcode %}

Wow! Three whole lines of Python code under our belts! Nothing can stop us now! Next week we'll add some asteroids to the game!

## October 5, 2019

Hey Jr. Coders!

This week in class, most of us finised up our Blockly adventures, and played some awesome typing games! Walking around the class, I can already see a huge improvement in your typing skills, all of you!

In 2 weeks we will begin to take a look at some code, and learn more about how your computer works!

See you then!

## September 28, 2019

Hello Jr. Coders!

Today, we worked on some more Blockly! You guys are doing so great, and I am truly inspired by your dedication, enthusiasm, and problem solving abilities.

The last 15 minutes of class were spent on [Type Racer](https://play.typeracer.com/) so we could practice our typing!

Next week we will go over everything we've learned in class, and look at some of our first code!

See you guys then!

## September 21, 2019

Hello Jr. Coders!

This week in class, you guys went all out and began your blockly adventures! You guys were awesome at figuring out what code needed to be dragged over to complete the levels!

Next week, we will continue on with our adventures, but first we will take up some of the harder levels that you guys had problems with, and move on to other computer skills you guys will need!

See you next week!

## September 14, 2019

Hello Jr. Coders!

This week in class we took our very first look into the world of coding! We talked about what coding is, what it means to be a coder, and played a few games getting ourselves into the minds of coders. 

Then we actually took a look at Blockly and played the first level! 

Next week we will jump right into Blockly getting started with the program.