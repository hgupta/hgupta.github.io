---
layout: base
permalink: /about/
title: About Me
---

My name is __{{ site.author.name }}__. I live in {{ site.author.location }}.

<div class="about--social mb-3">
  <span class="mr-1"><a href="{{ site.author.social.github | absolute_url }}" target="_blank">hgupta</a> on Github</span>
  <span class="mr-1"><a href="{{ site.author.social.linkedin | absolute_url }}" target="_blank">Harsh Gupta</a> on LinkedIn</span>
</div>

I am a Data Scientist, with special expertise in Natural Language Processing (NLP),
Natural Language Understanding (NLU), Computer Vision, Deep Learning
and Data Exploration for Machine Learning.

I also work with Full Stack teams to architect and develop coherent online
experience for customers & users. This includes developing dashboards, graph
plots, managing data & models.

> {{ site.title }} [IPA: <code style="font-size: 1rem;">{{ site.ipa }}</code>]
is a Sanskrit word __{{ site.iast }}__ that translates to
<a href="https://en.wikipedia.org/wiki/Transliteration" target="_blank">transliteration</a>.

> __`Shree` symbol__ (top of page),
I used the SVG icon from [here](https://www.flaticon.com/free-icon/shree_3100695){:target="_blank"}
as a stencil and drew the symbol myself as a different image.

> `Shortcut Icon` was created using [Pixlr X Online Photo Editor](https://pixlr.com/x/){:target="blank"}

{% include certificates.html %}

<div class="about--extras mt-3">
  <span class="mr-1"><a href="{{ '/notes/' | absolute_url }}">Notes</a></span>
  <span class="mr-1"><a href="{{ '/lists/' | absolute_url }}">Lists of Ideas</a></span>
  <span class="mr-1"><a href="{{ '/procrastination/' | absolute_url }}">Todo list</a></span>
</div>

