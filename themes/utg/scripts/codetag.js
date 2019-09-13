hexo.extend.tag.register('code', (args, content) => {

  let caption = args.join(' ');
  return `<figure>
  <figcaption>${caption}</figcaption>
    <pre><code class="language-python" contenteditable spellcheck="false">${content}</code></pre>
</figure>`
}, {ends: true})