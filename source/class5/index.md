---
title: UN401 14:30
name: class5
icon: fab fa-steam
date: 2019-09-13 16:27:40
---
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
