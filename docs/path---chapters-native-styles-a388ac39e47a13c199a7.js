webpackJsonp([68103787285271],{339:function(n,s){n.exports={data:{markdownRemark:{html:'<h1>Native Styles</h1>\n<p>In this chapter we will look at building native \'stylesheets\' to customize our article.</p>\n<h1>Styles Values</h1>\n<p>Colors in react native styles are exactly the same as web, all common formats are accepted. Docs <a href="https://facebook.github.io/react-native/docs/colors.html">here</a>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> Stylesheet <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> styles <span class="token operator">=</span> Stylesheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  colors<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    white<span class="token punctuation">:</span> <span class="token string">\'#ffffff\'</span><span class="token punctuation">,</span>\n    black<span class="token punctuation">:</span> <span class="token string">\'rgb(0, 0, 0)\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Measurements however are different. measurements are done in numbers, and roughly represent the px measurement in web.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> Stylesheet <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> styles <span class="token operator">=</span> Stylesheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  measures<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    lrg<span class="token punctuation">:</span> <span class="token number">32</span><span class="token punctuation">,</span>\n    med<span class="token punctuation">:</span> <span class="token number">16</span><span class="token punctuation">,</span>\n    sml<span class="token punctuation">:</span> <span class="token number">8</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Layout is purely flex based (this is good 🤙). there is no support for any other layout.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> Stylesheet <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> styles <span class="token operator">=</span> Stylesheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token comment">// we can use `mainLayout` as a style object</span>\n  mainLayout<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    flex<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>                   <span class="token comment">// fill container priority of 1</span>\n    flexDirection<span class="token punctuation">:</span> <span class="token string">\'column\'</span><span class="token punctuation">,</span>   <span class="token comment">// vertical layout</span>\n    justifyContent<span class="token punctuation">:</span> <span class="token string">\'center\'</span><span class="token punctuation">,</span>  <span class="token comment">// center children primary axis</span>\n    alignItems<span class="token punctuation">:</span> <span class="token string">\'center\'</span><span class="token punctuation">,</span>      <span class="token comment">// center children on alternate axis</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>To use our stylesheet we can apply a member of our stylesheet to a component\'s style property.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>\n  Text<span class="token punctuation">,</span>\n  View<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">\'./styles\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Article</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>mainLayout<span class="token punctuation">}</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span>Text<span class="token operator">></span>\n        Rest <span class="token keyword">of</span> <span class="token template-string"><span class="token string">`Articles`</span></span> definition\n      <span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h1>Documentation</h1>\n<p>The most exaustive documentation on styling in react native can be found at <a href="https://facebook.github.io/react-native/docs/layout-props.html">here for layout</a>, <a href="https://facebook.github.io/react-native/docs/view-style-props.html">here for views</a>, <a href="https://facebook.github.io/react-native/docs/text-style-props.html">here for text</a>. Otherwise to style a specific component check the component\'s own documentation. There should be a section on styling it.</p>\n<h1>Excercise</h1>\n<p>Lets go ahead and get our native <code class="language-text">Article</code> component looking bling 💅💅💅.</p>\n<p><strong><em>Additional Excercise</em></strong></p>\n<p>We should refactor our Native <code class="language-text">Article</code> component\'s stylesheet into its own module at <code class="language-text">Components/Article/styles.js</code>.</p>',frontmatter:{date:"March 22, 2018",path:"/chapters/native-styles",title:"Native Styles"}}},pathContext:{}}}});
//# sourceMappingURL=path---chapters-native-styles-a388ac39e47a13c199a7.js.map