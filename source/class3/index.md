---
title: SUN 11:00
name: class3
order: 3
icon: fab fa-steam
date: 2019-09-13 16:23:44
---

## August 7, 2020

So today in class we fixed our crouching, then started tilemaping!

We set it up in class, but in case you want to work on it over the weekend...

<pre>Window > 2D > TilePalet</pre>

Have a great weekend guys, and I'll see you all on Monday :) 

## August 6, 2020

Hey guys, so in today's class, we finished up the transitions of our player! We got the crouch animation working, and transitioned between all of our animation states.

In the process, we re-worked our update function. Here is the Update function is all of its glory.
(Also, at the end of class, we added the **localScale** code to flip our character whenever it moves left and right)

{% code PlayerController.cs %}
    void Update()
    {
        // If I press the left arrow key
        if (Input.GetKey(KeyCode.LeftArrow))
        {
            // Move player to the left
            transform.Translate(Vector2.left * speed * Time.deltaTime);
            // Make player face left
            transform.localScale = new Vector3(-1f, 1f, 1f);
            animator.SetBool("IsMoving", true);
        // If I release the left arrow key
        } else if (Input.GetKeyUp(KeyCode.LeftArrow))
        {
            animator.SetBool("IsMoving", false);
        }


        // If I press the right arrow key
        else if (Input.GetKey(KeyCode.RightArrow))
        {
            // Move player to the right
            transform.Translate(Vector2.right * speed * Time.deltaTime);
            // Make the player face right
            transform.localScale = new Vector3(1f, 1f, 1f);
            animator.SetBool("IsMoving", true);
        // If I release the right arrow key
        } else if (Input.GetKeyUp(KeyCode.RightArrow))
        {
            animator.SetBool("IsMoving", false);
        }

        // If I press the down arrow key
        else if (Input.GetKey(KeyCode.DownArrow))
        {
            animator.SetBool("IsCrouching", true);
        }
        // If I release the down arrow key
        else if (Input.GetKeyUp(KeyCode.DownArrow))
        {
            animator.SetBool("IsCrouching", false);
        }
    }
{% endcode %}

And that's it! Tomorrow we will start tiling, promise :)
See you all then :) 


## August 5, 2020

Hello!
In today's class we created transitions for our animations.
Then we hooked up those transitions in our code.

Here is the **PlayerController.cs** code for reference!

{% code PlayerController.cs %}
// Using statements...

public class PlayerController : MonoBehaviour
{
    public float speed = 2f;
    Animator animator;

    // Start is called before the first frame update
    void Start()
    {
        animator = GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update()
    {
        // If I press the left arrow key
        if (Input.GetKey(KeyCode.LeftArrow))
        {
            // Move player to the left
            transform.Translate(Vector2.left * speed * Time.deltaTime);
            animator.SetBool("IsMoving", true);
        }

        // If I press the right arrow key
        else if (Input.GetKey(KeyCode.RightArrow))
        {
            // Move player to the right
            transform.Translate(Vector2.right * speed * Time.deltaTime);
            animator.SetBool("IsMoving", true);
        }

        else
        {
            animator.SetBool("IsMoving", false);
        }

    }
}
{% endcode %}

And that's all!
Tomorrow we will work on the croutch and get to tiling our level! :)
See you all then

## August 4, 2020

Heyo!

In today's class, we finished setting up the animations, and created some code to move the player left and right.
I provided you guys with the left movement, and let you guys implement the right movement.

Here's is both completed.

{% code PlayerController.cs %}
// Using statements

public class PlayerController : MonoBehaviour
{
    public float speed = 2f;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        // If I press the left arrow key
        if (Input.GetKey(KeyCode.LeftArrow))
        {
            // Move player to the left
            transform.Translate(Vector2.left * speed * Time.deltaTime);
        }

        // If I press the right arrow key
        if (Input.GetKey(KeyCode.RightArrow))
        {
            // Move player to the right
            transform.Translate(Vector2.right * speed * Time.deltaTime);
        }
    }
}
{% endcode %}

That's it!
Tomorrow we'll hook up the animations with the movement :)

See you peoples then!

## July 31, 2020

Today we fixed the **Pixels Per Unit** on our assets and set up the IDLE animation for our player. 
REMEMBER Monday August 3rd is a HOLIDAY, so enjoy the break and I'll see you guys on Tuesday! :)

## July 30, 2020

Hey!
So today was another slow day, and again apologies. It's hard to do these classes online.
We downloaded the "Sunny Land Assets" and tomorrow we will design a really cool looking game! :)

See you guys then!

## July 29, 2020

Today we got our animation set up in Unity.
I apologize for how slowly classes seem to be going with the animation!

Tomorrow's class will speed up and we begin to tackle a brand new game :)

See y'all then!!!

## July 28, 2020

Today's class was spent creating a **SpriteSheet** (that we uplaoded to Unity) that has just 2 frames of an animation. 
Tomorrow's class we will look at how to actually animate this!

See you guys tomorrow :)

## July 27, 2020

Today's class we completely finished off level 2!

In tomorrow's class, we will talk about animations and how to set one up in Unity!

See you guys then :)

## July 24, 2020

Hello internet folk.
Today we were tasked with creating our own Level2 using what we learned from making Level1!
This took up the whole class!

Have a great weekend guys, and on Monday we will start with our new topic: animations!

## July 23, 2020

Hey peoples!

So today in class we talked about Scene management, and learned how to change scenes. It's actually really easy, and takes one line of code:

{% code example.cs %}
SceneManager.LoadScene("Level2");
{% endcode %}

To help out, I will post the entire **FishController.cs** file (including the using statements) so you can ensure it's going to work properly

{% code FishController.cs %}
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

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
        // If we press the 'w' key
        if (Input.GetKey(KeyCode.W))
        {
            // Move up by speed pixels
            transform.Translate(Vector2.up * speed * Time.deltaTime);
        }
        // If we press the 'a' key
        if (Input.GetKey(KeyCode.A))        
        {
            // Move left by speed pixels
            transform.Translate(Vector2.left * speed * Time.deltaTime);
        }
        // If we press the 's' key
        if (Input.GetKey(KeyCode.R))
        {
            // Move down by speed pixels
            transform.Translate(Vector2.down * speed * Time.deltaTime);
        }
        // If we press the 'd' key
        if (Input.GetKey(KeyCode.S))    
        {
            // Move right by speed pixels
            transform.Translate(Vector2.right * speed * Time.deltaTime);
        }
    }

    // Whenever the fish collides with something that has a box collider and isTrigger is set, this method fires up!
    private void OnTriggerEnter2D(Collider2D collision)
    {
        // If what we collided with has the Tag "Enemy"
        if (collision.gameObject.CompareTag("Enemy"))
        {
            // Destroy the fish!
            Destroy(gameObject);
        }

        // If what we collided with has the Tag "End"
        if (collision.gameObject.CompareTag("End"))
        {
            Debug.Log("Change scene to Level2");
            // Change Scene to Level2
            SceneManager.LoadScene("Level2");
        }

    }
}
{% endcode %}


And that's it! Have a great day. Tomorrow we will work on our Victory screen and start our level2!

## July 22, 2020

Hey!
So in today's class we just made it so every Enemy object could move. We did that by adding the **EnemyController.cs** script to each enemy, and modifying the **speed** and **distance** variables to get a cool, and difficult, game!

The last thing we did was setup collision detection for the **end of the level** object. We first had to create a new **Tag** called **End** and make sure we assign the new tag to the GameObject.

Then we modified the collision code from yesterday to include a collision 
for the sign.

I'm only going to put the **OnTriggerEnter2D** code, you should be able to see where it goes!

{% code FishController.cs %}
// Whenever the fish collides with something that has a box collider and isTrigger is set, this method fires up!
private void OnTriggerEnter2D(Collider2D collision)
{
    // If what we collided with has the Tag "Enemy"
    if (collision.gameObject.CompareTag("Enemy"))
    {
        // Destroy the fish!
        Destroy(gameObject);
    }

    // We are going to type right here!
    if (collision.gameObject.CompareTag("End"))
    {
        Debug.Log("Change scene to Level2");
    }

}
{% endcode %}

Right now, it just prints something to the screen, tomorrow, it will change Scenes for us. (But to do that, we need to talk about what a scene actually is, so that's why I left it for tomorrow!)

Have a great day and I'll see you guys tomorrow :)

## July 21, 2020

Hey guys.
In today's class, we used **sin** to make our enemies move up and down.

Here is the code, and remember to attach this code to **one** enemy.

{% code EnemyController.cs %}
// Imports ...
public class EnemyController : MonoBehaviour
{
    public float speed = 2f;
    public float distance = 2f;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        // This makes the enemy move up and down like it's on a circle!
        transform.Translate(Vector2.down * Mathf.Sin(Time.time * speed) * distance * Time.deltaTime);
    }
}
{% endcode %}

Tomorrow we will make all the objects move, and move on to changing levels when we reach a certain point in the game!

See you guys tomorrow :)

## July 20, 2020

Hey guys, so in today's class, we finally added some code for the collision detection! 

First, we made sure that all of our enemy GameObjects had a **Tag** of **Enemy**. (Remember Tags are at the top of the **Inspector Pane**)

Here's the code that made the collision detection work.
Once again, I'll post the entire script so you can see where the code needs to be placed!

{% code FishController.cs %}
// Imports ...
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
        // If we press the 'w' key
        if (Input.GetKey(KeyCode.W))
        {
            // Move up by speed pixels
            transform.Translate(Vector2.up * speed * Time.deltaTime);
        }
        // If we press the 'a' key
        if (Input.GetKey(KeyCode.A))        
        {
            // Move left by speed pixels
            transform.Translate(Vector2.left * speed * Time.deltaTime);
        }
        // If we press the 's' key
        if (Input.GetKey(KeyCode.R))
        {
            // Move down by speed pixels
            transform.Translate(Vector2.down * speed * Time.deltaTime);
        }
        // If we press the 'd' key
        if (Input.GetKey(KeyCode.S))    
        {
            // Move right by speed pixels
            transform.Translate(Vector2.right * speed * Time.deltaTime);
        }
    }

    // Whenever the fish collides with something that has a box collider and isTrigger is set, this method fires up!
    private void OnTriggerEnter2D(Collider2D collision)
    {
        // If what we collided with has the Tag "Enemy"
        if (collision.gameObject.CompareTag("Enemy"))
        {
            // Destroy the fish!
            Destroy(gameObject);
        }

    }
}
{% endcode %}

That's all! Tomorrow we will make the enemies move!
Have a great Monday :)

## July 17, 2020

Hey guys!

So today's class, we added components and modified them a bit to suit our needs.

Here is the Long story Short of what we needed to do today:

1. Add a **RigidBody2D** and a **BoxCollider2D** to every GameObject **except** background
2. Under **RigidBody2D**>**constraints**, tick the **[] Freez Z** box.
3. For every GameObject **except** background and fish, under the **BoxCollider2D** tick the box that sais **[] IsTrigger**.

And honestly, that's all we did today!

Monday's class will be collision detection and movement of the enemies :)

See you then!!

## July 16, 2020

Sup students of the internet in my calss?!

Today we got organizational! We moved all of our game objects into **Parent Objects** and created sorting layers!

There was no code written today, but what we did today will make tomorrow's class a million times easier :)

Have a great day and I'll see you all tomorrow!!

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


