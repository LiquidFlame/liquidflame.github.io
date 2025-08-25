#!/usr/bin/env bash
set -euo pipefail

title="${*:-}"
[ -z "$title" ] && {
  echo "Usage: tools/newpost.sh \"My Post Title\""
  exit 1
}

slug="$(echo "$title" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g;s/^-|-$//g')"
date_full="$(date "+%F %T %z")"
date_file="$(date +%F)"
file="_posts/${date_file}-${slug}.md"

mkdir -p _posts "assets/img/${slug}"

cat >"$file" <<EOF
---
layout: post
title: "$title"
date: $date_full
description: ""
categories: [hacking]
tags: []
image: /assets/img/${slug}/cover.png
toc: true
comments: true
sitemap: true
published: false
---
Intro goes here…

EOF

echo "Created $file (published: false). Add images to assets/img/${slug}/"
${EDITOR:-nano} "$file"
