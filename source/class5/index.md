---
title: UN401 14:30
name: class5
icon: fab fa-steam
date: 2019-09-13 16:27:40
---

## September 28, 2019

Hey guys! This week, we began coding! Basically all we did in class was set up the first movement direction, and I'll leave it to you guys, as an excersise that we will take up at the beginning of next class, to solve!

The first thing we did was create a folder in our **Assets** folder called **Scripts**, and in that folder we created a script called **PlayerController.cs**. This is what the code looks like, without any modifications!

{% code PlayerController.cs %}
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{

    // Start is called before the first frame update
    void Start()
    {
    }

    // Update is called once per frame
    void Update()
    {
    }
}
{% endcode %}

Then, we added this bit of code to the **Update()** method, and the bit of code just below the class declaration.

{% code PlayerController.cs %}
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{

    public float speed = 5f;

    // Start is called before the first frame update
    void Start()
    {
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey(KeyCode.RightArrow))
        {
            transform.Translate(Vector2.right * speed * Time.deltaTime);
        }
    }
}
{% endcode %}

So, let's talk about what that new piece of code means!

Basically, we are saying to Unity "Hey Unity, **if**, however you get **Input**, someone happens to press the **Right Arrow** button on the keyboard, **Translate** the current **Game Object's** position to the right by a factor of **speed**"

Now your job is to do the same with the other 3 directions! If you have any questions, ask away!

See you guys next week!

## September 21, 2019

Hello game devs! This week in class (while we weren't waiting for Unity to load / download) we got to play around a bit with the interface of Unity!

We will be using this interface a lot (duh) throughout the coming weeks, so don't we afraid to play and brake things, everything in Unity can be reset!

Other than talking about the interface, we downloaded some assets and put them into unity to play around with them.

You can download the assets from the **Links** page of this website, then simply extract the Sprites folder and drag and drop that into unity!

BOOM! Now, simply drag pictures into the **Game Scene** to have them show up! It's really that easy!

Next week, we will start our adventures with some **C#** coding, making our player move around the screen!

See you guys next week!

## September 14, 2019

Hello Game Devs! This week in class we took our first look at the Unity Game Engine! Unity is a professional game engine designed to make the process of making video games amazing.

We installed the Unity Hub, so your **only homework** was to actually install Unity 2018 LTS and Visual Studio 2017 (or 2019)

Next week we will begin to look at the UI for Unity and create our first scene!
