---
title: SUN 11:00
name: class3
order: 3
icon: fab fa-steam
date: 2019-09-13 16:23:44
---

## July 15, 2020

Hey guys and gals!
Today's class covered the idea of **public** variables in Unity. So to showcase them, we created a public variable at the top of our **FishController** script called speed. It looked like this:

{% code FishController.cs %}
// ...
public float speed;
// ...
{% endcode %}

Now we can control that speed through Unity.

Then we hooked up our speed to our code so that the fish would actually move at that speed. Once again, here is the whole code for your convinence:

{% code FishController.cs %}
// Using statements ...

public class FishController : MonoBehaviour
{
    public float speed;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey(KeyCode.W))
        {
            transform.Translate(Vector2.up * speed * Time.deltaTime);
        }

        if (Input.GetKey(KeyCode.A))        
        {
            transform.Translate(Vector2.left * speed * Time.deltaTime);
        }

        if (Input.GetKey(KeyCode.R))
        {
            transform.Translate(Vector2.down * speed * Time.deltaTime);
        }

        if (Input.GetKey(KeyCode.S))    
        {
            transform.Translate(Vector2.right * speed * Time.deltaTime);
        }
    }
}
{% endcode %}

The last thing we did was litter the game with obstacles for our fish to avoid (or we worked with Photopea to make our obstacles :) )

Have a great day and I'll 'see' you tomorrow! :)

## July 14, 2020

Hey guys and gals!
Today we got our fish moving around on the screen.
The first thing we did was finish our **FishController.cs** script to include all the directions.
It now looks like this!

{% code FishController.cs %}
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FishController : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        // The code would go here if I say put the code in the Start function
    }

    // Update is called once per frame1
    void Update()
    {
        if (Input.GetKey(KeyCode.W))
        {
            transform.Translate(Vector2.up * Time.deltaTime);
        }

        if (Input.GetKey(KeyCode.A))
        {
            transform.Translate(Vector2.left * Time.deltaTime);
        }

        if (Input.GetKey(KeyCode.S))
        {
            transform.Translate(Vector2.down * Time.deltaTime);
        }

        if (Input.GetKey(KeyCode.D))
        {
            transform.Translate(Vector2.right * Time.deltaTime);
        }
    }
}
{% endcode %}

Now we have to hook up our script to the actual Game Object.

Make sure you can see the **FishController** script at the bottom panel of your screen.
Now press on the **fish** in your Scene View, and drag n' drop the script on to the **Inspector Panel** on the right side of the screen!

You should see something added to the **Inspector pane** that looks like 
"[x] Fish Controller (Script)"

Now you can move your fishy on the screen!

Tomorrow we will take a look at **public** variables in Unity and add some speed to our fish.

See you guys tomorrow! :)

## July 13, 2020

Hey guys, so today we got everyone set up properly with Unity.

Once that was done, we created a new Folder in our **Assets** folder called **Scripts** and inside created a new **C#** script called **FishController**.

Inside that file, we added some code.
I'll put the code for the entire file so you can see what it all looks like together!

{% code FishController.cs %}
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FishController : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        // The code would go here if I say put the code in the Start function
    }

    // Update is called once per frame1
    void Update()
    {
        if (Input.GetKey(KeyCode.W))
        {
            transform.Translate(Vector2.up * Time.deltaTime);
        }
    }
}
{% endcode %}

And that's it! This will make our fish move up when we press the "W" key, but it won't work yet! That's what we will work on tomorrow!!

See you guys then :) 

## July 10, 2020

Today, we had a new student, Laura, join us. Since we had to get her all setup with Unity and Visual Studio, we took it easy, learned nothing new, and played some Kahoot!

All we need done for next week is at least a picture of a fish.

Have a great weekend, see you on Monday!

## July 9, 2020

Hey guys, so today we finished off creating our sprites for our FishMaze game, and finished putting them in Unity.

Now comes the fun part, getting the images to appear in Unity... and this is reeeally simple.

Go to your picture at the bottom of your screen, and drag it onto the game window (REMEMBER: You must be on the **Scene** tab, not the **Game** tab)

Once the pictures are on the screen, they become **Game Objects**. You can now modify the **Game Objects** by dragging them around, resizing them, AND adding cool components to them.

To add a component, click on the Game Object you would like to put a component on, then on the **Inspector pane** (the one on the right) press the **Add Component** button, then pick which component you would like to use (we chose RigidBody2D) and press play.

MAGIC!

Hope you guys had fun today, and I'll see you tomorrow!

## July 8, 2020

Hey guys, so today, we simply continued creating assets for our FishMaze game.

Here is what we have to create by the end of tomorrow's class:
- A Background (underwater)
- 3 different "enemies" that our main character must avoid (could be a hook, enemy fish or shark, human, bomb, or literally anything you can think of)
- Some way to know the player has reached the end of the level
(Could be a sign, maybe a cave, completely up to you)

So far, all of your Sprites are looking great! Keep up the great work and I'll see you guys tomorrow!

## July 7, 2020

Hey guys! So today, we learned how to create our own assets (a fish sprite) and put it in our Unity game.

### How to access Photopea
The website we used to create our masterpiece is [Photopea](https://www.photopea.com/). We pressed on **New Project** and made sure the width and the height were **64px**. Then we pressed the "Create" button.

Once we finished our drawing, we went to File > Export As > PNG and pressed the "Save" button.

### How to put it in our Unity Game
Now, open Unity, and in the **Assests** folder, you should have created a **Sprites** folder (if not, create it now).

Then simply Drag and Drop the image you downloaded before into this folder!

That's it!
Tomorrow we will make more assets and put them in Unity!

Have a great day and see you tomorrow!

## July 6, 2020

Welcome to our first-ever all-virtual Reidmount class! Today was just an introduction to the course, and some introductions to each other.


