---
title: UN401 14:30
name: class5
order: 5
icon: fab fa-steam
date: 2019-09-13 16:27:40
---

## May 2, 2020

Hey guys!
Today we implemented the FollowCam script, then spent the rest of class working on developing our scene a bit more!
Here is the FollowCam script! 

{% code FollowCam.cs %}
// Imports ...
public class FollowCam : MonoBehaviour
{
    public GameObject player;
    public float followSpeed = 1f;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        Vector3 currentPlayerPosition = new Vector3(
          player.transform.position.x,
          0,
          -10
        )

        transform.position = Vector3.Slerp(
            transform.position, 
            currentPlayerPosition,
            Time.deltaTime * followSpeed);
        
    }
}
{% endcode %}

And that's it! Next week we'll focus on creating Enemies and working on their interactions with the scene and our Player!

See you all next week! :)


## April 25, 2020

Hey guys!
So today, we concluded the code to ensure that our player cannot double jump.
I will post the entire code for **GroundCheck.cs**. You can compare it to last week's post to see what was added this class.

{% code GroundCheck.cs %}
public class GroundCheck : MonoBehaviour
{
    // Start is called before the first frame update
    private PlayerController player;
    void Start()
    {
        player = GetComponentInParent<PlayerController>();
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    // This method will be triggered whenever we are currently collidiing with "collision"
    private void OnCollisionStay2D(Collision2D collision)
    {
        // Check what we are colliding with!
        if (collision.gameObject.CompareTag("Ground"))
        {
            player.onGround = true;
        }
    }

    // This method will be triggered whenever we 'EXIT' any collision
    private void OnCollisionExit2D(Collision2D collision)
    {
        // Check what we were colliding with
        if (collision.gameObject.CompareTag("Ground"))
        {
            player.onGround = false;
        }
    }
}
{% endcode %}

And that's all the code we wrote in this class!
Next week, we will quickly implement the follow camera and continue with the Enemies.
See you next week!


## April 18, 2020

Hey guys!
Thank you once again for all of your patience with this whole online learning situation!

Today's class was just about fixing the little bugs you had in your code and making sure everyone was 'up-to-snuff' for next week's class.

Today we made sure that everyone had a Ground Collider on their Ellen Prefab.

If you forgot how to set everything up, here's a recap of what we did!

1. Right click **on** Ellen, and **Create Empty Game Object**. Name that object **GroundCheck**. Then add a **Box Collider 2D** to that object and edit the collider so it just covers Ellen's feet.

2. Create a Script: Right Click in the Assets Panel > Create > C# Script. Call it **GroundCheck.cs**.

Here is what that Script looks like:

{% code GroundCheck.cs %}
// Imports ...

public class GroundCheck : MonoBehaviour
{
    // Start is called before the first frame update
    private PlayerController player;
    void Start()
    {
        player = GetComponentInParent<PlayerController>();
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
{% endcode %}

And that's it! Next class we will stop our player from double jumpting completely, and begin to make the camera follow our movement!

Have a great week!

## April 11, 2020

Hey guys! 
So from now on, we will be continuing our classes online using Zoom.

Your work for this week was to ensure that you are all caught up. 

Below is the code that we've done together since ending our in-person classes. If you have any questions, please don't hesitate to ask questions on the form: https://staugistine.underthegui.com/forum

Also, here is the link to the PowerPoint:
https://drive.google.com/file/d/1kiTxvUoLtsm2HLoPCLSgJMCSVWsKSN5H/view?usp=sharing

{% code PlayerController.cs %}
public class PlayerController : MonoBehaviour
{
    public float speed = 4f;
    public float jumpForce = 5f;
    public Rigidbody2D rb;
    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey(KeyCode.RightArrow))
        {
            transform.Translate(Vector2.right * speed * Time.deltaTime);
        }

        else if (Input.GetKey(KeyCode.LeftArrow))
        {
            transform.Translate(Vector2.left * speed * Time.deltaTime);
        }

        if (Input.GetKeyDown(KeyCode.Space))
        {
            rb.AddForce(Vector2.up * jumpForce, ForceMode2D.Impulse);
        }
    }
}
{% endcode %}

That's actually all the code that we have written in class, but there are some things we need to make sure we've done in unity!

1. Ensure we have sorting layers and that everything is on it's proper layer.
To find out your sorting layer, click on any asset in your Heirarchy (Left box).
On the right is the Inspector. Look for the Sorting Layer dropdown. I have
    - Background
    - Midground
    - Default
    - Player
    - Foreground
2. Make sure Ellen (your main character) has a 
    - Rigid Body 2D
    - Box Collider (Or capsule Collider)
    - Player Controller Script

3. Make sure your Ground Object has
    - Tilemap (If it doesn't, refer to Chapter 3 in the Book)
    - The tilemap should have a Tilemap Collider 2D

Just as a reminder, if at any point you want to change up your scene, here's what you do:

At the top, Find Window.
Window > 2D > Tile Palette

Then click on the tile you wish to "paint" and paint away!

That's everything we've done up till this point.

Can't wait to "see" you guys on Saturday!


## March 14, 2020

So as you've figured out by now, Reidmount was closed this past Saturday, and will be closed at least until April 4th.

First thing's first, try to finish up to lesson 6 (in the book) by the time we get back together!

Once that's done, there are a few options to work, at your leisure, on some of your Python fundamentals; the following websites can help with that!
https://www.codecademy.com/
https://www.codingame.com/
https://codecombat.com/
https://codingbat.com/python

FOR NEXT WEEK I will post a detailed guide on lessons 1 to 5. (So you can still work on 6!)

Have a great march break guys!


## January 25, 2020

Hey guys!
So I don't know what you did today because, as you realised, I was not there!
I'll explain why next week!

I will also update this section next week.

See you then!

## January 18, 2020

Hey guys!
This week we got soooo much done! It was awesome.... Jokes.
We went through the Unity Asset store and agreed on a sprite pack to download. The download may or may not have taken all class, but it's all good!
The Asset Pack we agreed on was called **GameKit2D**. Make sure we all import that pack for next week's class.

See you next week!

## January 11, 2020

Hey guys! Welcome to a new semester at Reidmount! I'm going to take this post to post all of the script code for the completed Space game!!

{% code PlayerController.cs %}
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class PlayerController : MonoBehaviour
{
    public float speed = 5f;
    public GameObject laser;
    public int health = 3;
    public Text healthUI;
    public int score = 0;
    public Text scoreUI;
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
        else if (Input.GetKey(KeyCode.LeftArrow))
        {
            transform.Translate(Vector2.left * speed * Time.deltaTime);
        }
        else if (Input.GetKey(KeyCode.UpArrow))
        {
            transform.Translate(Vector2.up * speed * Time.deltaTime);
        }
        else if (Input.GetKey(KeyCode.DownArrow))
        {
            transform.Translate(Vector2.down * speed * Time.deltaTime);
        }

        if (Input.GetKeyDown(KeyCode.Space))
        {
            Instantiate(laser, transform.position, Quaternion.identity);
        G}

        if (health <= 0)
        {
            Destroy(gameObject);
        }

        healthUI.text = "Health: " + health;
        scoreUI.text = "Score: " + score;
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
      if (collision.gameObject.tag == "Enemy")
      {
            Destroy(collision.gameObject);
            health--;
      }
    }
}
{% endcode %}

{% code LaserController.cs %}
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LaserController : MonoBehaviour
{
    public float speed = 5f;
    public GameObject explosion;
    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        // Move the laser up!
        transform.Translate(Vector2.up * speed * Time.deltaTime);

        if (transform.position.y > 10)
        {
            Destroy(gameObject);
        }
    }


    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.tag == "Enemy")
        {
            Destroy(collision.gameObject);
            gameObject.GetComponent<PlayerController>().score += 25;
            Destroy(gameObject);
        }
    }
}
{% endcode %}

{% code EnemyController.cs %}
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyController : MonoBehaviour
{
    public float speed = 3f;
    public GameObject enemyLaser;
    // Start is called before the first frame update
    void Start()
    {
        InvokeRepeating("ShootLaser", 0.1f, 5f);
    }

    // Update is called once per frame
    void Update()
    {
        transform.Translate(Vector2.down * speed * Time.deltaTime);

        if (transform.position.y < -10)
        {
            Destroy(gameObject);
        }
    }

    void ShootLaser()
    {
        Instantiate(enemyLaser, transform.position, Quaternion.identity);
    }
}
{% endcode %}

{% code EnemyLaserController.cs %}
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyLaserController : MonoBehaviour
{
    public float speed = 20f;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        Debug.Log("Speed " + speed);
        transform.Translate(Vector2.down * speed * Time.deltaTime);
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.tag == "Player")
        {
            collision.gameObject.GetComponent<PlayerController>().health--;
            Destroy(gameObject);
        }
    }
}
{% endcode %}

{% code SpawnerController.cs %}
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SpawnerController : MonoBehaviour
{
    public GameObject enemyShip;
    // Start is called before the first frame update
    void Start()
    {
        InvokeRepeating("EnemySpawner", 0.5f, 1f);
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void EnemySpawner()
    {
        Vector2 enemyPosition =
            new Vector2(Random.Range(-8f, 8f), transform.position.y);
        Instantiate(enemyShip, enemyPosition, Quaternion.identity);
    }
}
{% endcode %}

Boom! That's it! I hope you guys had fun making this game! The next game we make will also be a lot of fun!! :D

## November 23, 2019

Hey guys!

This week we looked at spawners!
After making sure that we could all hit enemies with our **GreenLasers** we created a not-so-great spawner that we will improve next week!

I had you guys create an empty GameObject called **Spawner**, then a new C# script called **SpawnerController**.
Right now, the **SpawnerController** looks like:

{% code SpawnerController.cs %}
public class SpawnerController : MonoBehaviour
{
    public GameObject enemyShip;
    // Start is called before the first frame update
    void Start()
    {
        InvokeRepeating("EnemySpawner", 1f, 3f);
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    private void EnemySpawner()
    {
        Instantiate(enemyShip, transform.position, Quaternion.identity);
    }
}
{% endcode %}

And that's all the code we wrote today! It never seems like a lot after the fact, but I'm sure it felt like a lot during the course of the hour!

Next class, as I said above, we'll work on making the spawner less bad!

Have a great week!

## November 16, 2019

This week we tackled explosions!

To begin, create an explosion particle system as a new game object! Follow all the steps we did last week to make the particle system look like explosions (remember the explosion sprite we have)

Now we need a way to make the explosion happen! Well, we want the explosion to happen when our GreenLaser hits an EnemyShip!

Easy enough, in our LaserController, let's add code to **Instantiate** an explosion (Just like how our PlayerController **Instantiates** a GreenLaser)

{% code LaserController.cs %}
public class LaserController : MonoBehaviour
{
    ...
    public GameObject explosion;
    
    void Start()
    {
    }

    void Update()
    {
      ...
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.tag == "Enemy")
        {
            ...
            Instantiate(explosion, transform.position, Quaternion.identity);
        }
    }
}
{% endcode %}

Remember that we need to create a public field at the top of our script so that Unity knows what explosion we are talking about! 

And that's it! Next week will talk about spawners and how to spawn enemy automatically!

Have a great week!

## November 2 & 9, 2019

So as you guys know, I was away on November 2nd, so this week we just made sure everyone was on the same page, there were no errors in the code, and we understood what was taught in November 2nd.

This week we looked at particle systems! How they work, and how they can make our game look cool!

Since there is no code for particle systems, you will have to bare with this wall of text explaining them!

A particle system is simply a **component** (just like **BoxCollier2D**) that generates a bunch of squares from the GameObject's origin. These squares can become any sprite we wish tem to be. We can also change the properties of the particle system that tell the boxes how to be generated and where to go!

So Right Click on our PlayerShip game object and create an EmptyGameObject inside of the PlayerShip object, call it **ParticleEmitter**. Now on this new GameObject add a **ParticleSystem** component. Play around with all the settings, but the 2 most important ones are the **renderer** property and the **shape** property.

The **shape** property simply needs to change so that the **shape** is not a cone, but an edge. Then change the rotation on the z axis to 180 degrees so the squares shoot down from the Playership. 

The **renderer** property needs a Material to render so we don't always see purple squares! Let's make a material.

In the Material's folder (if you don't have one, make one) create a new Material and set the Blending option to **Alpha Blending**. This blending asks for a sprite to render, so give it the sprite of the ship trail!

Now drag this new Material we just made onto the ParticleEmitter's Renderer's Material field.

BOOM, cool looking ship trails!

Next week we will look at explosions!

## October 26, 2019

Hey GameDevs! This week we continued on with this notion of hit detection!
The first thing we did was give our GreenLaser GameObject a BoxCollider2D, and made sure to check the **Is Trigger** box on the inspection pane!

Now in our LaserController script, we will write some code very similar to last class, that is, if the laser hits the enemy, destroy both the enemy and the laser!

{% code LaserController.cs %}
...
void Update() 
{
  ...
}
private void OnEnterTrigger2D(Collider2D collision)
{
  if (collision.gameObject.tag == "Enemy")
  {
    Destroy(collision.gameObject);
    Destroy(gameObject);
  }
}
...
{% endcode %}

Now we need to make sure that our PlayerShip, EnemyShip, and GreenLaser are all PreFabs (they all have blue cubes) to ensure that whenever we create (or spawn) more of these GameObjects, they will have all the properties we just spent 2 days adding!

And that's all folks. Next week we take a look at particle systems!!



## October 26, 2019

Hey GameDevs! This week we continued on with this notion of hit detection!
The first thing we did was give our GreenLaser GameObject a BoxCollider2D, and made sure to check the **Is Trigger** box on the inspection pane!

Now in our LaserController script, we will write some code very similar to last class, that is, if the laser hits the enemy, destroy both the enemy and the laser!

{% code LaserController.cs %}
...
void Update() 
{
  ...
}
private void OnEnterTrigger2D(Collider2D collision)
{
  if (collision.gameObject.tag == "Enemy")
  {
    Destroy(collision.gameObject);
    Destroy(gameObject);
  }
}
...
{% endcode %}

Now we need to make sure that our PlayerShip, EnemyShip, and GreenLaser are all PreFabs (they all have blue cubes) to ensure that whenever we create (or spawn) more of these GameObjects, they will have all the properties we just spent 2 days adding!

And that's all folks. Next week we take a look at particle systems!!

## October 19, 2019

This week we talked about RigidBody2D and BoxCollider2D! These are just components that we can add to our GameObjects to make them behave like actual objects in the real world!

So any GameObject with a RigidBody2D component is treated as an object would in the real world: they will be affected by gravity, friction, mass, and more!

Now for BoxCollider2D! If we want 2 or more objects to interact with one another, we will use some sort of **collider**. This tells unity to treat the 2 objects as solid objects: two objects with colliders on them won't pass through each other, they will be affected by each other, just like in real life.
Now with colliders, we have the option **Is Trigger** which tells unity to not treat it like a solid object anymore, but to simply let us know if anything collides with the object! This is the one we will use heavily!

So, put RigidBody2Ds and BoxCollider2Ds on the PlayerShip and EnemyShip, and on the PlayerShip make sure to check the **Is Trigger** box.

Putting a collider with a trigger on a game object gives us the ability to utilise the **OnTriggerEnter2D()** function, which goes off whenever something collides with us! We'll use it to check whether or not an EnemyShip collides with us! If it does, we will destroy both our ship and the EnemyShip!

{% code PlayerController.cs %}
...
void Update() 
{
  ...
}
private void OnEnterTrigger2D(Collider2D collision)
{
  if (collision.gameObject.tag == "Enemy")
  {
    Destroy(collision.gameObject);
    Destroy(gameObject);
  }
}
...
{% endcode %}

And that's it! Next class we work on the laser's hit detection!

## October 5, 2019

So this week, we talked about Prefabs and created a laser prefab that allowed us to **spawn** lasers from our Playership when we press the space key.

First thing's first, a Prefab is a **Pre Fabricated** GameObject that comes with properties and scripts that we decide we want to package together.

To create a Prefab, modify a GameObject to your liking, and then drag that GameObject from the left hierarchy pane to the Prefabs folder. BOOM, it should turn blue, and you've created a Prefab!

So in class, we created a GreenLaser GameObject, then created a **script** called **LaserController.cs**. Inside that script, we put one line of code that tells Unity to make that laser move up... always!

{% code LaserController.cs %}
void Update()
{
  // Move the laser up!
  transform.Translate(Vector2.up * speed * Time.deltaTime);
}
{% endcode %}

Now, we need to tell Unity to **Instantiate** (create) lasers whenever we press the space key! This is what that code looks like:

{% code PlayerController.cs %}
public GameObject laser;

...

void Update()
{
  ...
  if (Input.GetKeyDown(KeyCode.Space))
  {
    Instantiate(laser, transform.position, Quaternion.identity);
  }
}
{% endcode %}

So the first thing we have to do is tell the PlayerController script what a laser is! We do that by creating a **public** variable that we can later drag a Laser object onto through unity. Then we tell unity "Hey, whenever you get some input, and that input happens to be that the user pressed the spacbar, **instantiate** (create) a new **laser** where the current position of my Playership is!

And that's it!

Have a good week off, and I'll see you guys in 2 weeks.

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
