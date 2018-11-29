---
layout: index
description: >
    Generate software licenses dynamically with the use of query parameters. This site eliminates the problem of linking software licenses. If your software's license is not public facing or is not served anywhere, it is a common occurrence to link to a templated software license. The only problem is that the copyright date, owner, organization, and many other parameters are not filled out when using that particular solution. This site aims to solve this very small but legally impactful problem.
---

# Purpose

{{ page.description }}

# Get Started

Pick one of the common software licenses below. Once there, you will notice that some text is colored differently. These are placeholders that are configurable through the URL's query parameters. The text between the angle brackets is the query key and the value is what every you want it to be. Consider the following customized license:

<a href="{{site.url}}/MIT?year={{ site.time | date: '%Y' }}&owner=You" target="\_blank" >{{site.url}}/MIT?year={{ site.time | date: '%Y' }}&owner=You</a>

# Contribute

If you would like to contribute a common software license, then please open a pull request. The Github repository can be reached by clicking on the Github logo on the top right side of this page.
