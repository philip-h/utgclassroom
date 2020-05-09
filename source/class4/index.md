---
title: PY101 12:00
name: class4
order: 4
icon: fas fa-rocket
date: 2019-09-13 16:27:34
---

## May 2, 2020

Hello Jr. Coders!

This week wrote the code to make our player move up, down, left, and right.
Here it is! 

{% code obj_gabe(mani)/loog %}
# Enter the loop code for obj_gabe here.

if key_is_pressed('up'):
  self.y = self.y + 3

elif key_is_pressed('down'):
  self.y = self.y - 3
 
if key_is_pressed('left'):
  self.x = self.x - 3

elif key_is_pressed('right'):
  self.x = self.x + 3

{% endcode %}

We'll talk more about this next week, as well as uploading some more sprites!
Have a great week! :)


## April 25, 2020

Hello Jr. Coders!

This week, we set up the code for displaying Mani (or Gabe) to the screen!

Here is the code to do that!

{% code game/start %}
# Show the player to the screen
player = object_new('obj_gabe')
{% endcode %}

Remember, this code shows the object to the screen. Right now, it's a blue box because we have not told PixelPad what image the Object should show.
Let's do that now!

{% code obj_gabe/start %}
# Connect the sprite (spr_gabe) with the object (obj_gabe)
sprite = sprite_new('spr_gabe')
sprite_height = 2
sprite_width = 2
{% endcode %}

And that's all we did today!
Next class we will add some more sprites to our game so we can practice making them appear on the screen!

## April 18, 2020

Hello my Jr. Coders!
Today we began the adventure (with Mr. Coverdale too) of beginning our adventure game! Our only goal was to get one of the two sprites downloaded to our computers and uploaded onto PixelPad!

Here's a recap on how to do that:
- If you wanted Mani the girl:
https://drive.google.com/open?id=1MuWAUvlamxWKyvRiH4tVa-O6AFl1Wgl-
- If you wanted Gabe the boy:
https://drive.google.com/open?id=1EUJgYhYFXEit-Jzt58mgJ6QU-p8FCGyM

Then find the download button at the top of the page, and Download the image to your Desktop.

Then go to PixelPad > My Apps > T2. Find the green **+** next to the **Sprites** label. Find the sprite and call it **spr_player**

And that's it! Some of you may have written some code to make the player show up on screen! If you did, fantastic! If not, not to worry, we'll tackle that next class.

See you guys next week! Stay healthy and wash your hands!

## April 11, 2020

Hey guys! 
So from now on, we will be continuing our classes online using Zoom.

Your work for this week was to continue practicing typing and coding!

Below is the code that we've done together since ending our in-person classes. If you have any questions, please don't hesitate to ask questions on the form: https://staugistine.underthegui.com/forum

The one thing we did together was create a new app called T2.

On PixelPad, go to "My Apps" and press the blue "+ Create a new app" button. That's it!

Can't wait to "see" you all on Saturday!

Also, here is the link to the PowerPoint:
https://drive.google.com/file/d/1kiTxvUoLtsm2HLoPCLSgJMCSVWsKSN5H/view?usp=sharing

## March 14, 2020

So as you've figured out by now, Reidmount was closed this past Saturday, and will be closed at least until April 4th.

Your jobs, over the march break, is to practice coding and typing!

To practice Coding
https://scratch.mit.edu/
https://www.codecademy.com/
https://www.codingame.com/
https://codecombat.com/

To practice typing
https://www.typing.com/student/game/tommyq
https://archive.org/details/msdos_Mario_Teaches_Typing_1992
https://play.typeracer.com/

Practice at least a couple times a week to keep your skills sharp!

This is where I will keep you updated should anything change!

## January 25, 2020

Not sure what you did as I was not present. I'll discuss why next week (it was not my fault, I promise :) )
I will update this when I know!

## January 18, 2020

Hey guys! So this week in class we did some coding for the space game. Then about half way though the class, we had some structured free time, some of us working on code, Scratch, and typing games.

See you next week!

## January 11, 2020

HELLO! Welcome back to another semester here at Riedmuount!

This week we took some time to look at some code and figure out what it does, all of this to strengthen our understanding of what code is and what it does. You guys all surprised me with how much you remembered from last week.

Anyway, see you guys next week!

## November 23, 2019

Hey Jr. Devs!

Wow oh wow! You guys really surprised me! Some of you went ahead ALL THE WAY to lesson 7! Some of you are still on lesson 4 and THAT'S OKAY! In fact, it's perfect!

I love the passion you guys are bringing to the classroom, and the enthusiasm to code is really inspriring, even for a coding teacher.

I'll see you guys next week for a bit more of a structured day!

## November 16, 2019

Sup Jr. Devs! 

This week we looked at Lesson 3, and you guys worked more or less independently as I walked around and helped you with your code, and errors.

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
