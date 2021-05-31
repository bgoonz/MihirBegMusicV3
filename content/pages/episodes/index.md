---
title: Episodes
sections:
  - type: hero_section
    title: Episodes
    subtitle: List of episodes in order
    align: center
    padding_top: medium
    padding_bottom: small
    has_border: true
    background_color: none
  - type: blog_feed_section
    blog_feed_cols: three
    enable_cards: true
    show_recent: false
    show_date: true
    show_categories: false
    show_author: false
    show_excerpt: true
    show_image: true
    padding_top: small
    padding_bottom: large
    has_border: true
    background_color: none
    background_image: images/pattern.svg
    background_image_repeat: repeat
    background_image_size: auto
    background_image_opacity: 98
  - type: form_section
    title: Get Podcast Straight Into your Inbox
    title_align: center
    content_align: center
    form_position: bottom
    form_layout: inline
    form_id: subscribeForm
    form_action: /thank-you
    form_fields:
      - input_type: email
        name: email
        label: Email
        default_value: Your email address
        is_required: true
    submit_label: Subscribe
    padding_top: medium
    padding_bottom: medium
    has_border: true
    background_color: secondary
seo:
  title: Episodes
  description: This is the episodes page
  extra:
    - name: og:type
      value: website
      keyName: property
    - name: og:title
      value: Episodes
      keyName: property
    - name: og:description
      value: This is the episodes page
      keyName: property
    - name: og:image
      value: images/post-9.jpg
      keyName: property
      relativeUrl: true
    - name: twitter:card
      value: summary_large_image
    - name: twitter:title
      value: Episodes
    - name: twitter:description
      value: This is the episodes page
    - name: twitter:image
      value: images/post-9.jpg
      relativeUrl: true
layout: advanced
---
