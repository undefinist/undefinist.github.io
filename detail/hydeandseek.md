---
layout: detail
title: Hyde & Seek
permalink: hydeandseek
---
<div class="row">
<div class="col-lg-3 col-sm-3"></div>
<div class="col-lg-6 col-sm-6" markdown="1">
![Hyde & Seek](img/HydeLogo.png)
</div>
<div class="col-lg-3 col-sm-3"></div>
</div>

<div class='embed-container'>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/n4cHep9gxeg?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

{:.text-center.lead}
Hyde & Seek is a party game that pits 4 friends against one another in a deranged Victorian survival game.
You and 3 other "guests" are tasked to collect gems around the mansion.
But be careful! Rumor has it that guests have been turning into monsters around the mansion...
Be the first to collect ten gems and be granted your freedom!

{:.text-center.lead}
*ALL IS FAIR IN HYDE & SEEK. BETRAY, OUTWIT, EVEN CHOMP YOUR FELLOW GUESTS TO SECURE YOUR FREEDOM.*

{:.text-center.mb-4}
<a class="btn btn-lg btn-primary" href="https://games.digipen.edu/games/hyde-seek">Download Game</a>

<hr>

## Description
- Title: Hyde & Seek
- Duration: 32 weeks
- Team Size: 11
- Role: Generalist [Serialization/Materials/Gameplay/Design]
- Custom Engine (C++) with C# Scripting

Hyde & Seek is a 3D Junior-level local/networked 4-player party game. I worked on engine/editor features, gameplay programming as well as game and level design.

#### Digipen (Singapore) Awards 2020
Winner - Best Junior Technology  
Winner - Best User Interface  
Winner - Best 3D Visual Design  
Winner - Best Junior Game  
2nd Place - Claude Comair Grand Prize for Game of the Year

## Contributions
### Engine/Editor Programming
In the first half of the project (Sept 2019 - Dec 2019), I focused mainly on the engine/editor.
Here are some notable features I did.

#### Reflection & Serialization
One of the first core features I worked on for the engine was C++ Reflection.
All reflected class/struct/enums and their members are registered in one file.
In runtime, we can obtain types using strings, construct instances using types, and visit any reflected objects.
For serialization, we chose to use YAML, as YAML was much more readable and works better with version control.
I wrote a custom subset of YAML (as we didn't need all the features), as well as a binary serializer.

#### Shader Graph
One of the achievements I made for the engine/editor was a custom Material Editor.
I worked on both the frontend in the editor, as well as the backend in the compilation of the shader graph.
I also helped with integrating it into the graphics pipeline.
I wrote more detail about it in this [article](https://blog.undefinist.com/writing-a-shader-graph/).
Here's a little snippet of the shader graph in our engine, showing off a fake water material used for a level:

<video autoplay muted loop src="https://blog.undefinist.com/assets/posts/2020-05-06-writing-a-shader-graph/watermat.webm"></video>

#### Particle System
I also built the particle system *system* for the engine/editor, where I used Unity's Particle System components as reference.
I also integrated it into the rendering pipeline: buffering the data for instancing, as well as writing the vertex shader for billboarding.

#### UI Tools
Finally, I also wrote a basic UI system based on Unity UI. The UI elements all use anchoring to ensure that they scale
correctly across different screen sizes and ratios.

### Gameplay Programming
In the second half of the project (Jan 2020 - Apr 2020), I focused mainly on gameplay scripting.
I worked on a variety of scripts and systems, such as the player controller, game loop, as well as adding feedback.
I also wrote a Tween Manager to make it easier to tween and make sequences.

I had not worked on networked games before, so dealing with networking was very new to me.
In this project, I learnt a lot about networking and synchronization between the server and clients via *Remote Procedure Calls*.