hexo.extend.tag.register('code', (args, content) => {

  let caption = args.join(' ');
  let lang = "";
  if (caption.indexOf(".cs") !== -1) {
    lang = "csharp"
  } else {
    lang = "python"
  }
  return `<figure>
  <figcaption>${caption}</figcaption>
    <pre><code class="language-${lang}" contenteditable spellcheck="false">${content}</code></pre>
</figure>`
}, {ends: true})