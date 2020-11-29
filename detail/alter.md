---
layout: detail
title: Alter
permalink: alter
image: img/alter.png
---
<div class="row">
<div class="col-lg-3 col-sm-3"></div>
<div class="col-lg-6 col-sm-6" markdown="1">
{:.mt-3}
![Alter](img/AlterLogo.png)
</div>
<div class="col-lg-3 col-sm-3"></div>
</div>

<div class='embed-container'>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/mGc2YTy8bLY?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

{:.text-center.lead}
ALTER is a 2D action adventure platformer where the player has the ability to manipulate space, which the player can use to move and rotate objects to avoid threats and solve puzzles.

{:.text-center.mb-4}
<a class="btn btn-lg btn-primary" href="https://games.digipen.edu/games/alter">Download Game</a>

<hr>

## Description

- Title: ALTER
- Duration: 30 weeks
- Team Size: 8
- Role: Technical Lead
- Custom Engine (C++) with Lua Scripting

A 2D Sophomore game project, I was the technical lead, responsible for engine architecture, custom editor,
Lua bindings as well as reflection/serialization. I also contributed to the game design and some scripting.

#### DigiPen Game Awards
Winner - Continental Automotive Singapore Best 2D Physics Technology  
Finalist - Best Sophomore Technology  
Finalist - Koei Tecmo Singapore Most Innovative Design

## Contributions

### Engine Architecture

The engine was my first foray into Entity-Component-Systems.
Entities are just IDs, Components were stored in pools,
and Systems simply operate on specific Components or sets of Components.
The game engine is programmed in C++17, which allows for the use of newly introduced functionalities
such as `if constexpr`, fold expressions, the `std::filesystem` library and other useful libraries.

The engine runs in fixed timesteps with interpolated rendering. In other words, the rigidbodies' states
are interpolated visually between their last 2 states, allowing smoother visuals even when the rendering is faster than
the physics ticks.

Great care was also taken to ensure that project data was separated from engine data. The project assets and Lua scripts
are contained in a project folder, which the engine/editor references. When the final game build is exported,
those assets are copied and amalgamated with the engine data to reside beside the executable.

Each resource has a GUID which is stored in a .meta file alongside the asset file. Thanks to this, files can
be renamed and moved around via the editor without much consequences. Meta files can also contain other information.
For example, texture meta files can contain sprite animation information.

### Reflection/Serialization

An important feature I worked on was C++ Reflection. All reflected class/struct/enums and their members are registered
alongside the classes themselves. Methods could also be reflected.
In runtime, we can obtain types using strings, construct instances using types, and obtain their fields.
Reflection was used for automatic serialization as well as inspection in the editor. It also reduced the number
of manual bindings needed for Lua (see below).

For serialization, we serialize/deserialize to JSON using the library *JSON for Modern C++*. As stated, it uses
reflection to obtain the values of fields. It can also handle reflected containers, serializing the elements.
Lua script variables are also serialized. While JSON is a common format, there were a few problems with it.
For one, it gets unreadable the more nested it gets due to the spurious usage of curly braces. We also had trouble
sometimes caused by resolved conflicts in Git, resulting in a missing brace somewhere. In [Hyde & Seek](/hydeandseek),
I improved serialization by implementing YAML instead, which is superior both in readability and file-diffing.

### Lua Bindings

To support a faster workflow for gameplay development, I implemented Lua Scripting. We use *LuaJIT*, which is a
Just-In-Time Compiler for the Lua programming language. No other third-party libraries were used -- this means
careful management of the Lua stack.

Multiple global managers are exposed to the scripts via C++. Reflection was also used so that most types could be
used in the scripts if they were registered. All the loaded Lua chunks are also cached so the file doesn't have to be
loaded every time it's used. Most importantly, in other to facilitate development, every script
is embedded into their own environment. This environment prevents the local variables from leaking into the
global state. This made writing scripts a lot easier and less prone to headaches. Non-local variables in the file
were also exposed to the editor, allowing values to be changed and saved to the scene.

### Editor

![Screenshot](img/alter_editor.png)