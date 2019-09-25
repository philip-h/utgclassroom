---
title: PY301 09:00
name: class1
icon: fas fa-lemon
date: 2019-09-13 16:23:44
---

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

## September 14, 2019

Hello coders! Today in class, we spoke about the game that we are going to bu building: Fruit Ninja! I got you guys all set up on your PixelPad accounts so that next week we can get straight into coding!

Some ideas that were brought up in class for things to do throughout the semester:
1. Add different modes to the game.
2. Add special fruits (Like banana to freeze time)
3. Learn some HTML and CSS on the side

Enjoy your week, and I'll see you guys bright and early Saturday morning! 

