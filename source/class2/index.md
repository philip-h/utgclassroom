---
title: PY201 10:00
name: class2
icon: fas fa-gamepad
date: 2019-09-13 16:27:26
---
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