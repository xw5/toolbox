<template>
 <Navigation title="特殊符号" />
 <div class="w-full px-[20px] box-border">
  <div class="w-full p-[10px] box-border flex flex-col bg-[#f7f7f4] border-[1px] border-dashed border-gray-300">
    <h2 class="w-full text-center text-[16px] mb-[10px]">常用特殊符号</h2>
    <p class="w-full text-center text-[14px] text-gray-500 mb-[10px]">一共有 96 个常用特殊符号，点击符号可复制到剪贴板。</p>
    <ul class="symbols-list">
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('♕')" id="♕">♕</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('♖')" id="♖">♖</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('♔')" id="♔">♔</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('♗')" id="♗">♗</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('♘')" id="♘">♘</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('♙')" id="♙">♙</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('♛')" id="♛">♛</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('♜')" id="♜">♜</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('♚')" id="♚">♚</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('♝')" id="♝">♝</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('♞')" id="♞">♞</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('♟')" id="♟">♟</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☼')" id="☼">☼</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☀')" id="☀">☀</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❣')" id="❣">❣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('♺')" id="♺">♺</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('♻︎')" id="♻︎">♻︎</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☢︎')" id="☢︎">☢︎</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❡')" id="❡">❡</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☁')" id="☁">☁</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☂')" id="☂">☂</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☔︎')" id="☔︎">☔︎</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☃')" id="☃">☃</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☽')" id="☽">☽</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☾')" id="☾">☾</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('♨')" id="♨">♨</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❄')" id="❄">❄</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❅')" id="❅">❅</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❆')" id="❆">❆</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❖')" id="❖">❖</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('★')" id="★">★</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☆')" id="☆">☆</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✦')" id="✦">✦</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✪')" id="✪">✪</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✫')" id="✫">✫</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✿')" id="✿">✿</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❀')" id="❀">❀</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❁')" id="❁">❁</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('♥')" id="♥">♥</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❤')" id="❤">❤</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ღ')" id="ღ">ღ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☑')" id="☑">☑</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✔')" id="✔">✔</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✘')" id="✘">✘</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㄨ')" id="ㄨ">ㄨ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✖')" id="✖">✖</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✉')" id="✉">✉</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☎')" id="☎">☎</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✆')" id="✆">✆</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☏')" id="☏">☏</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('®')" id="®">®</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('©')" id="©">©</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('℗')" id="℗">℗</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('™')" id="™">™</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('℠')" id="℠">℠</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('℥')" id="℥">℥</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('℔')" id="℔">℔</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ℨ')" id="ℨ">ℨ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ℬ')" id="ℬ">ℬ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('♂')" id="♂">♂</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('♀')" id="♀">♀</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('웃')" id="웃">웃</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('유')" id="유">유</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☣')" id="☣">☣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☤')" id="☤">☤</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⌘')" id="⌘">⌘</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('༄')" id="༄">༄</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☯')" id="☯">☯</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☭')" id="☭">☭</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❧')" id="❧">❧</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⚘')" id="⚘">⚘</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✍')" id="✍">✍</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✎')" id="✎">✎</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✑')" id="✑">✑</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✂')" id="✂">✂</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✄')" id="✄">✄</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☹')" id="☹">☹</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☺')" id="☺">☺</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☻')" id="☻">☻</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☪')" id="☪">☪</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❂')" id="❂">❂</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☬')" id="☬">☬</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☸')" id="☸">☸</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('♆')" id="♆">♆</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('卍')" id="卍">卍</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☩')" id="☩">☩</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('§')" id="§">§</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⚾︎')" id="⚾︎">⚾︎</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⚽︎')" id="⚽︎">⚽︎</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⚓︎')" id="⚓︎">⚓︎</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✈︎')" id="✈︎">✈︎</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⚐')" id="⚐">⚐</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⚑')" id="⚑">⚑</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◙')" id="◙">◙</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❦')" id="❦">❦</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☸')" id="☸">☸</a>
      </li>
    </ul>
  </div>
  <div class="w-full p-[10px] box-border flex flex-col bg-[#f7f7f4] border-[1px] border-dashed border-gray-300">
    <h2 class="w-full text-center text-[16px] mb-[10px]">标点符号</h2>
    <p class="w-full text-center text-[14px] text-gray-500 mb-[10px]">一共有 117 个标点符号，点击符号可复制到剪贴板。</p>
    <ul class="symbols-list">
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('。')" id="。">。</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('，')" id="，">，</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('、')" id="、">、</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('：')" id="：">：</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∶')" id="∶">∶</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('；')" id="；">；</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('‘')" id="‘">‘</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('’')" id="’">’</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('“')" id="“">“</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('”')" id="”">”</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('〝')" id="〝">〝</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('〞')" id="〞">〞</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ˆ')" id="ˆ">ˆ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ˇ')" id="ˇ">ˇ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('﹕')" id="﹕">﹕</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('︰')" id="︰">︰</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('﹔')" id="﹔">﹔</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('﹖')" id="﹖">﹖</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('﹑')" id="﹑">﹑</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('·')" id="·">·</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('•')" id="•">•</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('¨')" id="¨">¨</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('.')" id=".">.</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('¸')" id="¸">¸</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy(';')" id=";">;</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('´')" id="´">´</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('？')" id="？">？</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('！')" id="！">！</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('～')" id="～">～</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('—')" id="—">—</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('｜')" id="｜">｜</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('‖')" id="‖">‖</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('＂')" id="＂">＂</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('〃')" id="〃">〃</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('｀')" id="｀">｀</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('@')" id="@">@</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('﹫')" id="﹫">﹫</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('¡')" id="¡">¡</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('¿')" id="¿">¿</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('﹏')" id="﹏">﹏</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('﹋')" id="﹋">﹋</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('︴')" id="︴">︴</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('々')" id="々">々</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('﹟')" id="﹟">﹟</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('#')" id="#">#</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('﹩')" id="﹩">﹩</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('$')" id="$">$</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('﹠')" id="﹠">﹠</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('&amp;')" id="&amp;">&amp;</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('﹪')" id="﹪">﹪</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('%')" id="%">%</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('﹡')" id="﹡">﹡</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('﹢')" id="﹢">﹢</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('×')" id="×">×</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('﹦')" id="﹦">﹦</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('‐')" id="‐">‐</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('￣')" id="￣">￣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('¯')" id="¯">¯</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('―')" id="―">―</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('﹨')" id="﹨">﹨</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('˜')" id="˜">˜</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('﹍')" id="﹍">﹍</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('﹎')" id="﹎">﹎</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('＿')" id="＿">＿</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('-')" id="-">-</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('~')" id="~">~</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('（')" id="（">（</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('）')" id="）">）</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('〈')" id="〈">〈</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('〉')" id="〉">〉</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('‹')" id="‹">‹</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('›')" id="›">›</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('﹛')" id="﹛">﹛</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('﹜')" id="﹜">﹜</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('『')" id="『">『</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('』')" id="』">』</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('〖')" id="〖">〖</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('〗')" id="〗">〗</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('［')" id="［">［</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('］')" id="］">］</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('《')" id="《">《</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('》')" id="》">》</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('〔')" id="〔">〔</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('〕')" id="〕">〕</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('{')" id="{">{</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('}')" id="}">}</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('「')" id="「">「</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('」')" id="」">」</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⎡')" id="⎡">⎡</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⎦')" id="⎦">⎦</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⎣')" id="⎣">⎣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⎤')" id="⎤">⎤</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('【')" id="【">【</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('】')" id="】">】</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('︵')" id="︵">︵</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('︷')" id="︷">︷</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('︿')" id="︿">︿</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('︹')" id="︹">︹</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('︽')" id="︽">︽</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('_')" id="_">_</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('︶')" id="︶">︶</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('︸')" id="︸">︸</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('﹀')" id="﹀">﹀</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('︺')" id="︺">︺</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('︾')" id="︾">︾</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ˉ')" id="ˉ">ˉ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('﹂')" id="﹂">﹂</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('﹄')" id="﹄">﹄</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('︼')" id="︼">︼</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('﹁')" id="﹁">﹁</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('﹃')" id="﹃">﹃</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('︻')" id="︻">︻</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▲')" id="▲">▲</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('●')" id="●">●</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('□')" id="□">□</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('…')" id="…">…</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('→')" id="→">→</a>
      </li>
    </ul>
  </div>
  <div class="w-full p-[10px] box-border flex flex-col bg-[#f7f7f4] border-[1px] border-dashed border-gray-300">
    <h2 class="w-full text-center text-[16px] mb-[10px]">数字序号</h2>
    <p class="w-full text-center text-[14px] text-gray-500 mb-[10px]">一共有 174 个数字序号，点击符号可复制到剪贴板。</p>
    <ul class="symbols-list">
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('①')" id="①">①</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('②')" id="②">②</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('③')" id="③">③</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('④')" id="④">④</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⑤')" id="⑤">⑤</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⑥')" id="⑥">⑥</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⑦')" id="⑦">⑦</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⑧')" id="⑧">⑧</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⑨')" id="⑨">⑨</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⑩')" id="⑩">⑩</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⑪')" id="⑪">⑪</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⑫')" id="⑫">⑫</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⑬')" id="⑬">⑬</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⑭')" id="⑭">⑭</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⑮')" id="⑮">⑮</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⑯')" id="⑯">⑯</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⑰')" id="⑰">⑰</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⑱')" id="⑱">⑱</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⑲')" id="⑲">⑲</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⑳')" id="⑳">⑳</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⓵')" id="⓵">⓵</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⓶')" id="⓶">⓶</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⓷')" id="⓷">⓷</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⓸')" id="⓸">⓸</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⓹')" id="⓹">⓹</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⓺')" id="⓺">⓺</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⓻')" id="⓻">⓻</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⓼')" id="⓼">⓼</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⓽')" id="⓽">⓽</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⓾')" id="⓾">⓾</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⓿')" id="⓿">⓿</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❶')" id="❶">❶</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❷')" id="❷">❷</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❸')" id="❸">❸</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❹')" id="❹">❹</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❺')" id="❺">❺</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❻')" id="❻">❻</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❼')" id="❼">❼</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❽')" id="❽">❽</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❾')" id="❾">❾</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❿')" id="❿">❿</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⓫')" id="⓫">⓫</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⓬')" id="⓬">⓬</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⓭')" id="⓭">⓭</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⓮')" id="⓮">⓮</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⓯')" id="⓯">⓯</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⓰')" id="⓰">⓰</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⓱')" id="⓱">⓱</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⓲')" id="⓲">⓲</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⓳')" id="⓳">⓳</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⓴')" id="⓴">⓴</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊀')" id="㊀">㊀</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊁')" id="㊁">㊁</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊂')" id="㊂">㊂</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊃')" id="㊃">㊃</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊄')" id="㊄">㊄</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊅')" id="㊅">㊅</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊆')" id="㊆">㊆</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊇')" id="㊇">㊇</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊈')" id="㊈">㊈</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊉')" id="㊉">㊉</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㈠')" id="㈠">㈠</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㈡')" id="㈡">㈡</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㈢')" id="㈢">㈢</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㈣')" id="㈣">㈣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㈤')" id="㈤">㈤</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㈥')" id="㈥">㈥</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㈦')" id="㈦">㈦</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㈧')" id="㈧">㈧</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㈨')" id="㈨">㈨</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㈩')" id="㈩">㈩</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⑴')" id="⑴">⑴</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⑵')" id="⑵">⑵</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⑶')" id="⑶">⑶</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⑷')" id="⑷">⑷</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⑸')" id="⑸">⑸</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⑹')" id="⑹">⑹</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⑺')" id="⑺">⑺</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⑻')" id="⑻">⑻</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⑼')" id="⑼">⑼</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⑽')" id="⑽">⑽</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⑾')" id="⑾">⑾</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⑿')" id="⑿">⑿</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⒀')" id="⒀">⒀</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⒁')" id="⒁">⒁</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⒂')" id="⒂">⒂</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⒃')" id="⒃">⒃</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⒄')" id="⒄">⒄</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⒅')" id="⒅">⒅</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⒆')" id="⒆">⒆</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⒇')" id="⒇">⒇</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⒈')" id="⒈">⒈</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⒉')" id="⒉">⒉</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⒊')" id="⒊">⒊</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⒋')" id="⒋">⒋</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⒌')" id="⒌">⒌</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⒍')" id="⒍">⒍</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⒎')" id="⒎">⒎</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⒏')" id="⒏">⒏</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⒐')" id="⒐">⒐</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⒑')" id="⒑">⒑</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⒒')" id="⒒">⒒</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⒓')" id="⒓">⒓</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⒔')" id="⒔">⒔</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⒕')" id="⒕">⒕</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⒖')" id="⒖">⒖</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⒗')" id="⒗">⒗</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⒘')" id="⒘">⒘</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⒙')" id="⒙">⒙</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⒚')" id="⒚">⒚</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⒛')" id="⒛">⒛</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('〇')" id="〇">〇</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('一')" id="一">一</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('二')" id="二">二</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('三')" id="三">三</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('四')" id="四">四</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('五')" id="五">五</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('六')" id="六">六</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('七')" id="七">七</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('八')" id="八">八</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('九')" id="九">九</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('十')" id="十">十</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('百')" id="百">百</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('千')" id="千">千</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('万')" id="万">万</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('亿')" id="亿">亿</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('零')" id="零">零</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('壹')" id="壹">壹</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('贰')" id="贰">贰</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('叁')" id="叁">叁</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('肆')" id="肆">肆</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('伍')" id="伍">伍</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('陆')" id="陆">陆</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('柒')" id="柒">柒</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('捌')" id="捌">捌</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('玖')" id="玖">玖</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('拾')" id="拾">拾</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('佰')" id="佰">佰</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('仟')" id="仟">仟</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('萬')" id="萬">萬</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('億')" id="億">億</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('0️⃣')" id="0️⃣">0️⃣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('1️⃣')" id="1️⃣">1️⃣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('2️⃣')" id="2️⃣">2️⃣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('3️⃣')" id="3️⃣">3️⃣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('4️⃣')" id="4️⃣">4️⃣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('5️⃣')" id="5️⃣">5️⃣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('6️⃣')" id="6️⃣">6️⃣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('7️⃣')" id="7️⃣">7️⃣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('8️⃣')" id="8️⃣">8️⃣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('9️⃣')" id="9️⃣">9️⃣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('🔟')" id="🔟">🔟</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⅰ')" id="Ⅰ">Ⅰ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⅱ')" id="Ⅱ">Ⅱ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⅲ')" id="Ⅲ">Ⅲ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⅳ')" id="Ⅳ">Ⅳ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⅴ')" id="Ⅴ">Ⅴ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⅵ')" id="Ⅵ">Ⅵ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⅶ')" id="Ⅶ">Ⅶ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⅷ')" id="Ⅷ">Ⅷ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⅸ')" id="Ⅸ">Ⅸ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⅹ')" id="Ⅹ">Ⅹ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⅺ')" id="Ⅺ">Ⅺ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⅻ')" id="Ⅻ">Ⅻ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⅰ')" id="ⅰ">ⅰ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⅱ')" id="ⅱ">ⅱ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⅲ')" id="ⅲ">ⅲ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⅳ')" id="ⅳ">ⅳ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⅴ')" id="ⅴ">ⅴ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⅵ')" id="ⅵ">ⅵ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⅶ')" id="ⅶ">ⅶ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⅷ')" id="ⅷ">ⅷ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⅸ')" id="ⅸ">ⅸ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⅹ')" id="ⅹ">ⅹ</a>
      </li>
    </ul>
  </div>
  <div class="w-full p-[10px] box-border flex flex-col bg-[#f7f7f4] border-[1px] border-dashed border-gray-300">
    <h2 class="w-full text-center text-[16px] mb-[10px]">上标 &amp; 下标</h2>
    <p class="w-full text-center text-[14px] text-gray-500 mb-[10px]">一共有 37 个上标 &amp; 下标，点击符号可复制到剪贴板。</p>
    <ul class="symbols-list">
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⁿ')" id="ⁿ">ⁿ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⁰')" id="⁰">⁰</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('¹')" id="¹">¹</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('²')" id="²">²</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('³')" id="³">³</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⁱ')" id="ⁱ">ⁱ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⁴')" id="⁴">⁴</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⁵')" id="⁵">⁵</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⁶')" id="⁶">⁶</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⁷')" id="⁷">⁷</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⁸')" id="⁸">⁸</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⁹')" id="⁹">⁹</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⁺')" id="⁺">⁺</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⁻')" id="⁻">⁻</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⁼')" id="⁼">⁼</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₊')" id="₊">₊</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₋')" id="₋">₋</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₌')" id="₌">₌</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⁽')" id="⁽">⁽</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⁾')" id="⁾">⁾</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₍')" id="₍">₍</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₎')" id="₎">₎</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₀')" id="₀">₀</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₁')" id="₁">₁</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₂')" id="₂">₂</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₃')" id="₃">₃</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₄')" id="₄">₄</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₅')" id="₅">₅</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₆')" id="₆">₆</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₇')" id="₇">₇</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₈')" id="₈">₈</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₉')" id="₉">₉</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ₐ')" id="ₐ">ₐ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ₑ')" id="ₑ">ₑ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ₒ')" id="ₒ">ₒ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ₓ')" id="ₓ">ₓ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ₔ')" id="ₔ">ₔ</a>
      </li>
    </ul>
  </div>
  <div class="w-full p-[10px] box-border flex flex-col bg-[#f7f7f4] border-[1px] border-dashed border-gray-300">
    <h2 class="w-full text-center text-[16px] mb-[10px]">数学符号</h2>
    <p class="w-full text-center text-[14px] text-gray-500 mb-[10px]">一共有 95 个数学符号，点击符号可复制到剪贴板。</p>
    <ul class="symbols-list">
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('≥')" id="≥">≥</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('≮')" id="≮">≮</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('≠')" id="≠">≠</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('≢')" id="≢">≢</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('^')" id="^">^</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∽')" id="∽">∽</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('≌')" id="≌">≌</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('≯')" id="≯">≯</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('≈')" id="≈">≈</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('＜')" id="＜">＜</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('＞')" id="＞">＞</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('≥')" id="≥">≥</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('≤')" id="≤">≤</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⩾')" id="⩾">⩾</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⩽')" id="⩽">⩽</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⋘')" id="⋘">⋘</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⋙')" id="⋙">⋙</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('=')" id="=">=</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('≈')" id="≈">≈</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('≝')" id="≝">≝</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('≞')" id="≞">≞</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('‖')" id="‖">‖</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∠')" id="∠">∠</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∡')" id="∡">∡</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∢')" id="∢">∢</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('≡')" id="≡">≡</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('+')" id="+">+</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('-')" id="-">-</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('×')" id="×">×</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('÷')" id="÷">÷</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('＋')" id="＋">＋</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('－')" id="－">－</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('±')" id="±">±</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('/')" id="/">/</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㏑')" id="㏑">㏑</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∨')" id="∨">∨</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⊙')" id="⊙">⊙</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㏒')" id="㏒">㏒</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('‖')" id="‖">‖</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∑')" id="∑">∑</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∈')" id="∈">∈</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⌒')" id="⌒">⌒</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∶')" id="∶">∶</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∴')" id="∴">∴</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∵')" id="∵">∵</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∷')" id="∷">∷</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('&amp;')" id="&amp;">&amp;</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('%')" id="%">%</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∩')" id="∩">∩</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∪')" id="∪">∪</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∝')" id="∝">∝</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∞')" id="∞">∞</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ω')" id="Ω">Ω</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∏')" id="∏">∏</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∐')" id="∐">∐</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∫')" id="∫">∫</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∮')" id="∮">∮</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∟')" id="∟">∟</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⊿')" id="⊿">⊿</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∀')" id="∀">∀</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∁')" id="∁">∁</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∃')" id="∃">∃</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∅')" id="∅">∅</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∆')" id="∆">∆</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∇')" id="∇">∇</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⊥')" id="⊥">⊥</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∧')" id="∧">∧</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∨')" id="∨">∨</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⊂')" id="⊂">⊂</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⊃')" id="⊃">⊃</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⊄')" id="⊄">⊄</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⊅')" id="⊅">⊅</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⊆')" id="⊆">⊆</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⊇')" id="⊇">⊇</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⊈')" id="⊈">⊈</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⊉')" id="⊉">⊉</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∈')" id="∈">∈</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∋')" id="∋">∋</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∉')" id="∉">∉</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∌')" id="∌">∌</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('√')" id="√">√</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∛')" id="∛">∛</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∜')" id="∜">∜</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('℅')" id="℅">℅</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('‰')" id="‰">‰</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('‱')" id="‱">‱</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∫')" id="∫">∫</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∬')" id="∬">∬</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∭')" id="∭">∭</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∮')" id="∮">∮</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∯')" id="∯">∯</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∰')" id="∰">∰</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∱')" id="∱">∱</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∲')" id="∲">∲</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∳')" id="∳">∳</a>
      </li>
    </ul>
  </div>
  <div class="w-full p-[10px] box-border flex flex-col bg-[#f7f7f4] border-[1px] border-dashed border-gray-300">
    <h2 class="w-full text-center text-[16px] mb-[10px]">单位符号</h2>
    <p class="w-full text-center text-[14px] text-gray-500 mb-[10px]">一共有 12 个单位符号，点击符号可复制到剪贴板。</p>
    <ul class="symbols-list">
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('°')" id="°">°</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('℃')" id="℃">℃</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('℉')" id="℉">℉</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㎎')" id="㎎">㎎</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㎏')" id="㎏">㎏</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㎜')" id="㎜">㎜</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㎝')" id="㎝">㎝</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㎞')" id="㎞">㎞</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㎡')" id="㎡">㎡</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㏄')" id="㏄">㏄</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㏎')" id="㏎">㏎</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㏕')" id="㏕">㏕</a>
      </li>
    </ul>
  </div>
  <div class="w-full p-[10px] box-border flex flex-col bg-[#f7f7f4] border-[1px] border-dashed border-gray-300">
    <h2 class="w-full text-center text-[16px] mb-[10px]">箭头符号</h2>
    <p class="w-full text-center text-[14px] text-gray-500 mb-[10px]">一共有 131 个箭头符号，点击符号可复制到剪贴板。</p>
    <ul class="symbols-list">
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('←')" id="←">←</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↑')" id="↑">↑</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('→')" id="→">→</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↓')" id="↓">↓</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↙')" id="↙">↙</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↘')" id="↘">↘</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↖')" id="↖">↖</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↗')" id="↗">↗</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↰')" id="↰">↰</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↱')" id="↱">↱</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↲')" id="↲">↲</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↳')" id="↳">↳</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↴')" id="↴">↴</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↵')" id="↵">↵</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↶')" id="↶">↶</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↺')" id="↺">↺</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↻')" id="↻">↻</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↷')" id="↷">↷</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➝')" id="➝">➝</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇄')" id="⇄">⇄</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇅')" id="⇅">⇅</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇆')" id="⇆">⇆</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇇')" id="⇇">⇇</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇈')" id="⇈">⇈</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇉')" id="⇉">⇉</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇊')" id="⇊">⇊</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇋')" id="⇋">⇋</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇌')" id="⇌">⇌</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇍')" id="⇍">⇍</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇎')" id="⇎">⇎</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇏')" id="⇏">⇏</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇐')" id="⇐">⇐</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇑')" id="⇑">⇑</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇒')" id="⇒">⇒</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇓')" id="⇓">⇓</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇔')" id="⇔">⇔</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇕')" id="⇕">⇕</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇖')" id="⇖">⇖</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇗')" id="⇗">⇗</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇘')" id="⇘">⇘</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇙')" id="⇙">⇙</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇚')" id="⇚">⇚</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇛')" id="⇛">⇛</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↯')" id="↯">↯</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↹')" id="↹">↹</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↔')" id="↔">↔</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↕')" id="↕">↕</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇦')" id="⇦">⇦</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇧')" id="⇧">⇧</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇨')" id="⇨">⇨</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇩')" id="⇩">⇩</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➫')" id="➫">➫</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➬')" id="➬">➬</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➩')" id="➩">➩</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➪')" id="➪">➪</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➭')" id="➭">➭</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➮')" id="➮">➮</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➯')" id="➯">➯</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➱')" id="➱">➱</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⏎')" id="⏎">⏎</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➜')" id="➜">➜</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➡')" id="➡">➡</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➥')" id="➥">➥</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➦')" id="➦">➦</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➧')" id="➧">➧</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➨')" id="➨">➨</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➷')" id="➷">➷</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➸')" id="➸">➸</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➻')" id="➻">➻</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➼')" id="➼">➼</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➽')" id="➽">➽</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➸')" id="➸">➸</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➹')" id="➹">➹</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➳')" id="➳">➳</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➤')" id="➤">➤</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➟')" id="➟">➟</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➲')" id="➲">➲</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➢')" id="➢">➢</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➣')" id="➣">➣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➞')" id="➞">➞</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇪')" id="⇪">⇪</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➚')" id="➚">➚</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➘')" id="➘">➘</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➙')" id="➙">➙</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➛')" id="➛">➛</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➺')" id="➺">➺</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇞')" id="⇞">⇞</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇟')" id="⇟">⇟</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇠')" id="⇠">⇠</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇡')" id="⇡">⇡</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇢')" id="⇢">⇢</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇣')" id="⇣">⇣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇤')" id="⇤">⇤</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇥')" id="⇥">⇥</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↜')" id="↜">↜</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↝')" id="↝">↝</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('♐')" id="♐">♐</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➴')" id="➴">➴</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➵')" id="➵">➵</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('➶')" id="➶">➶</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↼')" id="↼">↼</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↽')" id="↽">↽</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↾')" id="↾">↾</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↿')" id="↿">↿</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇀')" id="⇀">⇀</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇁')" id="⇁">⇁</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇂')" id="⇂">⇂</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇃')" id="⇃">⇃</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↞')" id="↞">↞</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↟')" id="↟">↟</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↠')" id="↠">↠</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↡')" id="↡">↡</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↢')" id="↢">↢</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↣')" id="↣">↣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↤')" id="↤">↤</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↪')" id="↪">↪</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↫')" id="↫">↫</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↬')" id="↬">↬</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↭')" id="↭">↭</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↮')" id="↮">↮</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↯')" id="↯">↯</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↩')" id="↩">↩</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇜')" id="⇜">⇜</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⇝')" id="⇝">⇝</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↸')" id="↸">↸</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↚')" id="↚">↚</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↛')" id="↛">↛</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↥')" id="↥">↥</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↦')" id="↦">↦</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↧')" id="↧">↧</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('↨')" id="↨">↨</a>
      </li>
    </ul>
  </div>
  <div class="w-full p-[10px] box-border flex flex-col bg-[#f7f7f4] border-[1px] border-dashed border-gray-300">
    <h2 class="w-full text-center text-[16px] mb-[10px]">制表符号</h2>
    <p class="w-full text-center text-[14px] text-gray-500 mb-[10px]">一共有 131 个制表符号，点击符号可复制到剪贴板。</p>
    <ul class="symbols-list">
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('─')" id="─">─</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('━')" id="━">━</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('│')" id="│">│</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┃')" id="┃">┃</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┄')" id="┄">┄</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┅')" id="┅">┅</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┆')" id="┆">┆</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┇')" id="┇">┇</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┈')" id="┈">┈</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┉')" id="┉">┉</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┊')" id="┊">┊</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┋')" id="┋">┋</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┌')" id="┌">┌</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┍')" id="┍">┍</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┎')" id="┎">┎</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┏')" id="┏">┏</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┐')" id="┐">┐</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┑')" id="┑">┑</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┒')" id="┒">┒</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┓')" id="┓">┓</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('└')" id="└">└</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┕')" id="┕">┕</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┖')" id="┖">┖</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┗')" id="┗">┗</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┘')" id="┘">┘</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┙')" id="┙">┙</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┚')" id="┚">┚</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┛')" id="┛">┛</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('├')" id="├">├</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┝')" id="┝">┝</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┞')" id="┞">┞</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┟')" id="┟">┟</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┠')" id="┠">┠</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┡')" id="┡">┡</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┢')" id="┢">┢</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┣')" id="┣">┣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┤')" id="┤">┤</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┥')" id="┥">┥</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┦')" id="┦">┦</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┧')" id="┧">┧</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┨')" id="┨">┨</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┩')" id="┩">┩</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┪')" id="┪">┪</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┫')" id="┫">┫</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┬')" id="┬">┬</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┭')" id="┭">┭</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┮')" id="┮">┮</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┯')" id="┯">┯</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┰')" id="┰">┰</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┱')" id="┱">┱</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┲')" id="┲">┲</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┳')" id="┳">┳</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┴')" id="┴">┴</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┵')" id="┵">┵</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┶')" id="┶">┶</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┷')" id="┷">┷</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┸')" id="┸">┸</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┹')" id="┹">┹</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┺')" id="┺">┺</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┻')" id="┻">┻</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┼')" id="┼">┼</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┽')" id="┽">┽</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┾')" id="┾">┾</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┿')" id="┿">┿</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╀')" id="╀">╀</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╁')" id="╁">╁</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╂')" id="╂">╂</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╃')" id="╃">╃</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╄')" id="╄">╄</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╅')" id="╅">╅</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╆')" id="╆">╆</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╇')" id="╇">╇</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╈')" id="╈">╈</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╉')" id="╉">╉</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╊')" id="╊">╊</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╋')" id="╋">╋</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('═')" id="═">═</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('║')" id="║">║</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╒')" id="╒">╒</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╓')" id="╓">╓</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╔')" id="╔">╔</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╕')" id="╕">╕</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╖')" id="╖">╖</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╗')" id="╗">╗</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╘')" id="╘">╘</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╙')" id="╙">╙</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╚')" id="╚">╚</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╛')" id="╛">╛</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╜')" id="╜">╜</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╝')" id="╝">╝</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╞')" id="╞">╞</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╟')" id="╟">╟</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╠')" id="╠">╠</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╡')" id="╡">╡</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╢')" id="╢">╢</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╣')" id="╣">╣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╤')" id="╤">╤</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╥')" id="╥">╥</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╦')" id="╦">╦</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╧')" id="╧">╧</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╨')" id="╨">╨</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╩')" id="╩">╩</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╪')" id="╪">╪</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╫')" id="╫">╫</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╬')" id="╬">╬</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╳')" id="╳">╳</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╔')" id="╔">╔</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╗')" id="╗">╗</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╝')" id="╝">╝</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╚')" id="╚">╚</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╬')" id="╬">╬</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('═')" id="═">═</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╓')" id="╓">╓</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╩')" id="╩">╩</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┠')" id="┠">┠</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┨')" id="┨">┨</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┯')" id="┯">┯</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┷')" id="┷">┷</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┏')" id="┏">┏</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┓')" id="┓">┓</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┗')" id="┗">┗</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┛')" id="┛">┛</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┳')" id="┳">┳</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⊥')" id="⊥">⊥</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('﹃')" id="﹃">﹃</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('﹄')" id="﹄">﹄</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('┌')" id="┌">┌</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╭')" id="╭">╭</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╮')" id="╮">╮</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╯')" id="╯">╯</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('╰')" id="╰">╰</a>
      </li>
    </ul>
  </div>
  <div class="w-full p-[10px] box-border flex flex-col bg-[#f7f7f4] border-[1px] border-dashed border-gray-300">
    <h2 class="w-full text-center text-[16px] mb-[10px]">方形、圆形、三角形符号</h2>
    <p class="w-full text-center text-[14px] text-gray-500 mb-[10px]">一共有 158 个方形、圆形、三角形符号，点击符号可复制到剪贴板。</p>
    <ul class="symbols-list">
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❏')" id="❏">❏</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❐')" id="❐">❐</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❑')" id="❑">❑</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❒')" id="❒">❒</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▏')" id="▏">▏</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▐')" id="▐">▐</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('░')" id="░">░</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▒')" id="▒">▒</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▓')" id="▓">▓</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▔')" id="▔">▔</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▕')" id="▕">▕</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('■')" id="■">■</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('□')" id="□">□</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▢')" id="▢">▢</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▣')" id="▣">▣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▤')" id="▤">▤</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▥')" id="▥">▥</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▦')" id="▦">▦</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▧')" id="▧">▧</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▨')" id="▨">▨</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▩')" id="▩">▩</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▪')" id="▪">▪</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▫')" id="▫">▫</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▬')" id="▬">▬</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▭')" id="▭">▭</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▮')" id="▮">▮</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▯')" id="▯">▯</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ˍ')" id="ˍ">ˍ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∎')" id="∎">∎</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⊞')" id="⊞">⊞</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⊟')" id="⊟">⊟</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⊠')" id="⊠">⊠</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⊡')" id="⊡">⊡</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⋄')" id="⋄">⋄</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▱')" id="▱">▱</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◆')" id="◆">◆</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◇')" id="◇">◇</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◈')" id="◈">◈</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◧')" id="◧">◧</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◨')" id="◨">◨</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◩')" id="◩">◩</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◪')" id="◪">◪</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◫')" id="◫">◫</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◰')" id="◰">◰</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◱')" id="◱">◱</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◲')" id="◲">◲</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◳')" id="◳">◳</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◻')" id="◻">◻</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◼')" id="◼">◼</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◽')" id="◽">◽</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◾')" id="◾">◾</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⧈')" id="⧈">⧈</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⧫')" id="⧫">⧫</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⎔')" id="⎔">⎔</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◙')" id="◙">◙</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◘')" id="◘">◘</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▀')" id="▀">▀</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▁')" id="▁">▁</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▂')" id="▂">▂</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▃')" id="▃">▃</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▄')" id="▄">▄</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▅')" id="▅">▅</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▆')" id="▆">▆</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▇')" id="▇">▇</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▉')" id="▉">▉</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▊')" id="▊">▊</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▋')" id="▋">▋</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('█')" id="█">█</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▌')" id="▌">▌</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▍')" id="▍">▍</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▎')" id="▎">▎</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▛')" id="▛">▛</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▜')" id="▜">▜</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▝')" id="▝">▝</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▞')" id="▞">▞</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▟')" id="▟">▟</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▖')" id="▖">▖</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▗')" id="▗">▗</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▘')" id="▘">▘</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▙')" id="▙">▙</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▚')" id="▚">▚</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▰')" id="▰">▰</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⊙')" id="⊙">⊙</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('●')" id="●">●</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('○')" id="○">○</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◎')" id="◎">◎</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◕')" id="◕">◕</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('¤')" id="¤">¤</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☪')" id="☪">☪</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❂')" id="❂">❂</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✪')" id="✪">✪</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☻')" id="☻">☻</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☼')" id="☼">☼</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Θ')" id="Θ">Θ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⊖')" id="⊖">⊖</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⊘')" id="⊘">⊘</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⊕')" id="⊕">⊕</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⊚')" id="⊚">⊚</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⊛')" id="⊛">⊛</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⊜')" id="⊜">⊜</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⊝')" id="⊝">⊝</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◉')" id="◉">◉</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◌')" id="◌">◌</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◍')" id="◍">◍</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◐')" id="◐">◐</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◑')" id="◑">◑</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◒')" id="◒">◒</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◓')" id="◓">◓</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◔')" id="◔">◔</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⊗')" id="⊗">⊗</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◖')" id="◖">◖</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◗')" id="◗">◗</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◯')" id="◯">◯</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◴')" id="◴">◴</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◵')" id="◵">◵</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◶')" id="◶">◶</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◷')" id="◷">◷</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⚫')" id="⚫">⚫</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❍')" id="❍">❍</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⦁')" id="⦁">⦁</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⦶')" id="⦶">⦶</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⦸')" id="⦸">⦸</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◤')" id="◤">◤</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◥')" id="◥">◥</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◄')" id="◄">◄</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('►')" id="►">►</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▶')" id="▶">▶</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◀')" id="◀">◀</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◣')" id="◣">◣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◢')" id="◢">◢</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▲')" id="▲">▲</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▼')" id="▼">▼</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('&nbsp;')" id="&nbsp;">&nbsp;</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▸')" id="▸">▸</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◂')" id="◂">◂</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▴')" id="▴">▴</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▾')" id="▾">▾</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('△')" id="△">△</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▽')" id="▽">▽</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▷')" id="▷">▷</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◁')" id="◁">◁</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⊿')" id="⊿">⊿</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▻')" id="▻">▻</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◅')" id="◅">◅</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▵')" id="▵">▵</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▿')" id="▿">▿</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('▹')" id="▹">▹</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◃')" id="◃">◃</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∆')" id="∆">∆</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◬')" id="◬">◬</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◭')" id="◭">◭</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◮')" id="◮">◮</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◸')" id="◸">◸</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◹')" id="◹">◹</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◺')" id="◺">◺</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('◿')" id="◿">◿</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('∇')" id="∇">∇</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☢')" id="☢">☢</a>
      </li>
    </ul>
  </div>
  <div class="w-full p-[10px] box-border flex flex-col bg-[#f7f7f4] border-[1px] border-dashed border-gray-300">
    <h2 class="w-full text-center text-[16px] mb-[10px]">心形、米字型、星星符号</h2>
    <p class="w-full text-center text-[14px] text-gray-500 mb-[10px]">一共有 46 个心形、米字型、星星符号，点击符号可复制到剪贴板。</p>
    <ul class="symbols-list">
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('♠')" id="♠">♠</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('♣')" id="♣">♣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('♥')" id="♥">♥</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('♤')" id="♤">♤</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('♡')" id="♡">♡</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❤')" id="❤">❤</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❥')" id="❥">❥</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ღ')" id="ღ">ღ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❣')" id="❣">❣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⚡︎')" id="⚡︎">⚡︎</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❇')" id="❇">❇</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❈')" id="❈">❈</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('❊')" id="❊">❊</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✳')" id="✳">✳</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✴')" id="✴">✴</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✻')" id="✻">✻</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('★')" id="★">★</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☆')" id="☆">☆</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✡')" id="✡">✡</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✦')" id="✦">✦</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✧')" id="✧">✧</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✩')" id="✩">✩</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✪')" id="✪">✪</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✫')" id="✫">✫</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✬')" id="✬">✬</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✭')" id="✭">✭</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✮')" id="✮">✮</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✯')" id="✯">✯</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✰')" id="✰">✰</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⁂')" id="⁂">⁂</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('⁑')" id="⁑">⁑</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☑')" id="☑">☑</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✓')" id="✓">✓</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✔')" id="✔">✔</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('√')" id="√">√</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☓')" id="☓">☓</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☒')" id="☒">☒</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✘')" id="✘">✘</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㄨ')" id="ㄨ">ㄨ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✕')" id="✕">✕</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✖')" id="✖">✖</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ރ')" id="ރ">ރ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✗')" id="✗">✗</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✢')" id="✢">✢</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('✣')" id="✣">✣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('☩')" id="☩">☩</a>
      </li>
    </ul>
  </div>
  <div class="w-full p-[10px] box-border flex flex-col bg-[#f7f7f4] border-[1px] border-dashed border-gray-300">
    <h2 class="w-full text-center text-[16px] mb-[10px]">货币符号</h2>
    <p class="w-full text-center text-[14px] text-gray-500 mb-[10px]">一共有 35 个货币符号，点击符号可复制到剪贴板。</p>
    <ul class="symbols-list">
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('$')" id="$">$</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('€')" id="€">€</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ƒ')" id="ƒ">ƒ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('£')" id="£">£</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₤')" id="₤">₤</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('¥')" id="¥">¥</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('￥')" id="￥">￥</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₵')" id="₵">₵</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('¢')" id="¢">¢</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('฿')" id="฿">฿</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₮')" id="₮">₮</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('৲')" id="৲">৲</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('৳')" id="৳">৳</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('௹')" id="௹">௹</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('៛')" id="៛">៛</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₠')" id="₠">₠</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₡')" id="₡">₡</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₢')" id="₢">₢</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₣')" id="₣">₣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₥')" id="₥">₥</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₦')" id="₦">₦</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₧')" id="₧">₧</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₨')" id="₨">₨</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₩')" id="₩">₩</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₪')" id="₪">₪</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₫')" id="₫">₫</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₭')" id="₭">₭</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₯')" id="₯">₯</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₰')" id="₰">₰</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₱')" id="₱">₱</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₲')" id="₲">₲</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₳')" id="₳">₳</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('₴')" id="₴">₴</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('﷼')" id="﷼">﷼</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('¤')" id="¤">¤</a>
      </li>
    </ul>
  </div>
  <div class="w-full p-[10px] box-border flex flex-col bg-[#f7f7f4] border-[1px] border-dashed border-gray-300">
    <h2 class="w-full text-center text-[16px] mb-[10px]">特殊英文字母</h2>
    <p class="w-full text-center text-[14px] text-gray-500 mb-[10px]">一共有 390 个特殊英文字母，点击符号可复制到剪贴板。</p>
    <ul class="symbols-list">
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐚')" id="𝐚">𝐚</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐛')" id="𝐛">𝐛</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐜')" id="𝐜">𝐜</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐝')" id="𝐝">𝐝</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐞')" id="𝐞">𝐞</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐟')" id="𝐟">𝐟</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐠')" id="𝐠">𝐠</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐡')" id="𝐡">𝐡</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐢')" id="𝐢">𝐢</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐣')" id="𝐣">𝐣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐤')" id="𝐤">𝐤</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐥')" id="𝐥">𝐥</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐦')" id="𝐦">𝐦</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐧')" id="𝐧">𝐧</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐨')" id="𝐨">𝐨</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐩')" id="𝐩">𝐩</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐪')" id="𝐪">𝐪</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐫')" id="𝐫">𝐫</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐬')" id="𝐬">𝐬</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐭')" id="𝐭">𝐭</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐮')" id="𝐮">𝐮</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐯')" id="𝐯">𝐯</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐰')" id="𝐰">𝐰</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐱')" id="𝐱">𝐱</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐲')" id="𝐲">𝐲</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐳')" id="𝐳">𝐳</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐀')" id="𝐀">𝐀</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐁')" id="𝐁">𝐁</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐂')" id="𝐂">𝐂</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐃')" id="𝐃">𝐃</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐄')" id="𝐄">𝐄</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐅')" id="𝐅">𝐅</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐆')" id="𝐆">𝐆</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐇')" id="𝐇">𝐇</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐈')" id="𝐈">𝐈</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐉')" id="𝐉">𝐉</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐊')" id="𝐊">𝐊</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐋')" id="𝐋">𝐋</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐌')" id="𝐌">𝐌</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐍')" id="𝐍">𝐍</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐎')" id="𝐎">𝐎</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐏')" id="𝐏">𝐏</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐐')" id="𝐐">𝐐</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐑')" id="𝐑">𝐑</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐒')" id="𝐒">𝐒</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐓')" id="𝐓">𝐓</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐔')" id="𝐔">𝐔</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐕')" id="𝐕">𝐕</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐖')" id="𝐖">𝐖</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐗')" id="𝐗">𝐗</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐘')" id="𝐘">𝐘</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝐙')" id="𝐙">𝐙</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗮')" id="𝗮">𝗮</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗯')" id="𝗯">𝗯</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗰')" id="𝗰">𝗰</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗱')" id="𝗱">𝗱</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗲')" id="𝗲">𝗲</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗳')" id="𝗳">𝗳</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗴')" id="𝗴">𝗴</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗵')" id="𝗵">𝗵</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗶')" id="𝗶">𝗶</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗷')" id="𝗷">𝗷</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗸')" id="𝗸">𝗸</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗹')" id="𝗹">𝗹</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗺')" id="𝗺">𝗺</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗻')" id="𝗻">𝗻</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗼')" id="𝗼">𝗼</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗽')" id="𝗽">𝗽</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗾')" id="𝗾">𝗾</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗿')" id="𝗿">𝗿</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝘀')" id="𝘀">𝘀</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝘁')" id="𝘁">𝘁</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝘂')" id="𝘂">𝘂</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝘃')" id="𝘃">𝘃</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝘄')" id="𝘄">𝘄</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝘅')" id="𝘅">𝘅</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝘆')" id="𝘆">𝘆</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝘇')" id="𝘇">𝘇</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗔')" id="𝗔">𝗔</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗕')" id="𝗕">𝗕</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗖')" id="𝗖">𝗖</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗗')" id="𝗗">𝗗</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗘')" id="𝗘">𝗘</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗙')" id="𝗙">𝗙</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗚')" id="𝗚">𝗚</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗛')" id="𝗛">𝗛</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗜')" id="𝗜">𝗜</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗝')" id="𝗝">𝗝</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗞')" id="𝗞">𝗞</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗟')" id="𝗟">𝗟</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗠')" id="𝗠">𝗠</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗡')" id="𝗡">𝗡</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗢')" id="𝗢">𝗢</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗣')" id="𝗣">𝗣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗤')" id="𝗤">𝗤</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗥')" id="𝗥">𝗥</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗦')" id="𝗦">𝗦</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗧')" id="𝗧">𝗧</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗨')" id="𝗨">𝗨</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗩')" id="𝗩">𝗩</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗪')" id="𝗪">𝗪</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗫')" id="𝗫">𝗫</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗬')" id="𝗬">𝗬</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝗭')" id="𝗭">𝗭</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝒜')" id="𝒜">𝒜</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ℬ')" id="ℬ">ℬ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝒞')" id="𝒞">𝒞</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝒟')" id="𝒟">𝒟</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ℰ')" id="ℰ">ℰ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ℱ')" id="ℱ">ℱ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝒢')" id="𝒢">𝒢</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ℋ')" id="ℋ">ℋ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ℐ')" id="ℐ">ℐ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝒥')" id="𝒥">𝒥</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝒦')" id="𝒦">𝒦</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ℒ')" id="ℒ">ℒ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ℳ')" id="ℳ">ℳ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝒩')" id="𝒩">𝒩</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝒪')" id="𝒪">𝒪</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝒫')" id="𝒫">𝒫</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝒬')" id="𝒬">𝒬</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ℛ')" id="ℛ">ℛ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝒮')" id="𝒮">𝒮</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝒯')" id="𝒯">𝒯</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝒰')" id="𝒰">𝒰</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝒱')" id="𝒱">𝒱</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝒲')" id="𝒲">𝒲</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝒳')" id="𝒳">𝒳</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝒴')" id="𝒴">𝒴</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝒵')" id="𝒵">𝒵</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝒶')" id="𝒶">𝒶</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝒷')" id="𝒷">𝒷</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝒸')" id="𝒸">𝒸</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝒹')" id="𝒹">𝒹</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ℯ')" id="ℯ">ℯ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝒻')" id="𝒻">𝒻</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ℊ')" id="ℊ">ℊ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝒽')" id="𝒽">𝒽</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝒾')" id="𝒾">𝒾</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝒿')" id="𝒿">𝒿</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝓀')" id="𝓀">𝓀</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝓁')" id="𝓁">𝓁</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝓂')" id="𝓂">𝓂</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝓃')" id="𝓃">𝓃</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ℴ')" id="ℴ">ℴ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝓅')" id="𝓅">𝓅</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝓆')" id="𝓆">𝓆</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝓇')" id="𝓇">𝓇</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝓈')" id="𝓈">𝓈</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝓉')" id="𝓉">𝓉</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝓊')" id="𝓊">𝓊</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝓋')" id="𝓋">𝓋</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝓌')" id="𝓌">𝓌</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝓍')" id="𝓍">𝓍</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝓎')" id="𝓎">𝓎</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝓏')" id="𝓏">𝓏</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔄')" id="𝔄">𝔄</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔅')" id="𝔅">𝔅</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ℭ')" id="ℭ">ℭ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔇')" id="𝔇">𝔇</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔈')" id="𝔈">𝔈</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔉')" id="𝔉">𝔉</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔊')" id="𝔊">𝔊</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ℌ')" id="ℌ">ℌ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ℑ')" id="ℑ">ℑ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔍')" id="𝔍">𝔍</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔎')" id="𝔎">𝔎</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔏')" id="𝔏">𝔏</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔐')" id="𝔐">𝔐</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔑')" id="𝔑">𝔑</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔒')" id="𝔒">𝔒</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔓')" id="𝔓">𝔓</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔔')" id="𝔔">𝔔</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ℜ')" id="ℜ">ℜ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔖')" id="𝔖">𝔖</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔗')" id="𝔗">𝔗</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔘')" id="𝔘">𝔘</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔙')" id="𝔙">𝔙</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔚')" id="𝔚">𝔚</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔛')" id="𝔛">𝔛</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔜')" id="𝔜">𝔜</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ℨ')" id="ℨ">ℨ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔞')" id="𝔞">𝔞</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔟')" id="𝔟">𝔟</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔠')" id="𝔠">𝔠</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔡')" id="𝔡">𝔡</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔢')" id="𝔢">𝔢</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔣')" id="𝔣">𝔣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔤')" id="𝔤">𝔤</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔥')" id="𝔥">𝔥</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔦')" id="𝔦">𝔦</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔧')" id="𝔧">𝔧</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔨')" id="𝔨">𝔨</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔩')" id="𝔩">𝔩</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔪')" id="𝔪">𝔪</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔫')" id="𝔫">𝔫</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔬')" id="𝔬">𝔬</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔭')" id="𝔭">𝔭</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔮')" id="𝔮">𝔮</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔯')" id="𝔯">𝔯</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔰')" id="𝔰">𝔰</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔱')" id="𝔱">𝔱</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔲')" id="𝔲">𝔲</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔳')" id="𝔳">𝔳</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔴')" id="𝔴">𝔴</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔵')" id="𝔵">𝔵</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔶')" id="𝔶">𝔶</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔷')" id="𝔷">𝔷</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚊')" id="𝚊">𝚊</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚋')" id="𝚋">𝚋</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚌')" id="𝚌">𝚌</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚍')" id="𝚍">𝚍</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚎')" id="𝚎">𝚎</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚏')" id="𝚏">𝚏</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚐')" id="𝚐">𝚐</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚑')" id="𝚑">𝚑</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚒')" id="𝚒">𝚒</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚓')" id="𝚓">𝚓</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚔')" id="𝚔">𝚔</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚕')" id="𝚕">𝚕</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚖')" id="𝚖">𝚖</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚗')" id="𝚗">𝚗</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚘')" id="𝚘">𝚘</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚙')" id="𝚙">𝚙</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚚')" id="𝚚">𝚚</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚛')" id="𝚛">𝚛</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚜')" id="𝚜">𝚜</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚝')" id="𝚝">𝚝</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚞')" id="𝚞">𝚞</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚟')" id="𝚟">𝚟</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚠')" id="𝚠">𝚠</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚡')" id="𝚡">𝚡</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚢')" id="𝚢">𝚢</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚣')" id="𝚣">𝚣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝙰')" id="𝙰">𝙰</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝙱')" id="𝙱">𝙱</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝙲')" id="𝙲">𝙲</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝙳')" id="𝙳">𝙳</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝙴')" id="𝙴">𝙴</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝙵')" id="𝙵">𝙵</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝙶')" id="𝙶">𝙶</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝙷')" id="𝙷">𝙷</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝙸')" id="𝙸">𝙸</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝙹')" id="𝙹">𝙹</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝙺')" id="𝙺">𝙺</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝙻')" id="𝙻">𝙻</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝙼')" id="𝙼">𝙼</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝙽')" id="𝙽">𝙽</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝙾')" id="𝙾">𝙾</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝙿')" id="𝙿">𝙿</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚀')" id="𝚀">𝚀</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚁')" id="𝚁">𝚁</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚂')" id="𝚂">𝚂</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚃')" id="𝚃">𝚃</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚄')" id="𝚄">𝚄</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚅')" id="𝚅">𝚅</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚆')" id="𝚆">𝚆</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚇')" id="𝚇">𝚇</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚈')" id="𝚈">𝚈</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝚉')" id="𝚉">𝚉</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕒')" id="𝕒">𝕒</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕓')" id="𝕓">𝕓</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕔')" id="𝕔">𝕔</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕕')" id="𝕕">𝕕</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕖')" id="𝕖">𝕖</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕗')" id="𝕗">𝕗</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕘')" id="𝕘">𝕘</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕙')" id="𝕙">𝕙</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕚')" id="𝕚">𝕚</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕛')" id="𝕛">𝕛</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕜')" id="𝕜">𝕜</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕝')" id="𝕝">𝕝</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕞')" id="𝕞">𝕞</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕟')" id="𝕟">𝕟</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕠')" id="𝕠">𝕠</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕡')" id="𝕡">𝕡</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕢')" id="𝕢">𝕢</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕣')" id="𝕣">𝕣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕤')" id="𝕤">𝕤</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕥')" id="𝕥">𝕥</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕦')" id="𝕦">𝕦</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕧')" id="𝕧">𝕧</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕨')" id="𝕨">𝕨</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕩')" id="𝕩">𝕩</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕪')" id="𝕪">𝕪</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕫')" id="𝕫">𝕫</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔸')" id="𝔸">𝔸</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔹')" id="𝔹">𝔹</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ℂ')" id="ℂ">ℂ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔻')" id="𝔻">𝔻</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔼')" id="𝔼">𝔼</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔽')" id="𝔽">𝔽</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝔾')" id="𝔾">𝔾</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ℍ')" id="ℍ">ℍ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕀')" id="𝕀">𝕀</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕁')" id="𝕁">𝕁</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕂')" id="𝕂">𝕂</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕃')" id="𝕃">𝕃</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕄')" id="𝕄">𝕄</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ℕ')" id="ℕ">ℕ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕆')" id="𝕆">𝕆</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ℙ')" id="ℙ">ℙ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ℚ')" id="ℚ">ℚ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ℝ')" id="ℝ">ℝ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕊')" id="𝕊">𝕊</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕋')" id="𝕋">𝕋</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕌')" id="𝕌">𝕌</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕍')" id="𝕍">𝕍</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕎')" id="𝕎">𝕎</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕏')" id="𝕏">𝕏</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('𝕐')" id="𝕐">𝕐</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ℤ')" id="ℤ">ℤ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⓐ')" id="ⓐ">ⓐ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⓑ')" id="ⓑ">ⓑ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⓒ')" id="ⓒ">ⓒ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⓓ')" id="ⓓ">ⓓ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⓔ')" id="ⓔ">ⓔ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⓕ')" id="ⓕ">ⓕ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⓖ')" id="ⓖ">ⓖ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⓗ')" id="ⓗ">ⓗ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⓘ')" id="ⓘ">ⓘ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⓙ')" id="ⓙ">ⓙ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⓚ')" id="ⓚ">ⓚ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⓛ')" id="ⓛ">ⓛ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⓜ')" id="ⓜ">ⓜ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⓝ')" id="ⓝ">ⓝ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⓞ')" id="ⓞ">ⓞ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⓟ')" id="ⓟ">ⓟ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⓠ')" id="ⓠ">ⓠ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⓡ')" id="ⓡ">ⓡ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⓢ')" id="ⓢ">ⓢ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⓣ')" id="ⓣ">ⓣ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⓤ')" id="ⓤ">ⓤ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⓥ')" id="ⓥ">ⓥ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⓦ')" id="ⓦ">ⓦ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⓧ')" id="ⓧ">ⓧ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⓨ')" id="ⓨ">ⓨ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ⓩ')" id="ⓩ">ⓩ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⓐ')" id="Ⓐ">Ⓐ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⓑ')" id="Ⓑ">Ⓑ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⓒ')" id="Ⓒ">Ⓒ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⓓ')" id="Ⓓ">Ⓓ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⓔ')" id="Ⓔ">Ⓔ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⓕ')" id="Ⓕ">Ⓕ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⓖ')" id="Ⓖ">Ⓖ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⓗ')" id="Ⓗ">Ⓗ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⓘ')" id="Ⓘ">Ⓘ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⓙ')" id="Ⓙ">Ⓙ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⓚ')" id="Ⓚ">Ⓚ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⓛ')" id="Ⓛ">Ⓛ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⓜ')" id="Ⓜ">Ⓜ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⓝ')" id="Ⓝ">Ⓝ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⓞ')" id="Ⓞ">Ⓞ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⓟ')" id="Ⓟ">Ⓟ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⓠ')" id="Ⓠ">Ⓠ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⓡ')" id="Ⓡ">Ⓡ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⓢ')" id="Ⓢ">Ⓢ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⓣ')" id="Ⓣ">Ⓣ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⓤ')" id="Ⓤ">Ⓤ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⓥ')" id="Ⓥ">Ⓥ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⓦ')" id="Ⓦ">Ⓦ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⓧ')" id="Ⓧ">Ⓧ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⓨ')" id="Ⓨ">Ⓨ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ⓩ')" id="Ⓩ">Ⓩ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('🄰')" id="🄰">🄰</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('🄱')" id="🄱">🄱</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('🄲')" id="🄲">🄲</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('🄳')" id="🄳">🄳</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('🄴')" id="🄴">🄴</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('🄵')" id="🄵">🄵</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('🄶')" id="🄶">🄶</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('🄷')" id="🄷">🄷</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('🄸')" id="🄸">🄸</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('🄹')" id="🄹">🄹</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('🄺')" id="🄺">🄺</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('🄻')" id="🄻">🄻</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('🄼')" id="🄼">🄼</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('🄽')" id="🄽">🄽</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('🄾')" id="🄾">🄾</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('🄿')" id="🄿">🄿</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('🅀')" id="🅀">🅀</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('🅁')" id="🅁">🅁</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('🅂')" id="🅂">🅂</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('🅃')" id="🅃">🅃</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('🅄')" id="🅄">🅄</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('🅅')" id="🅅">🅅</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('🅆')" id="🅆">🅆</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('🅇')" id="🅇">🅇</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('🅈')" id="🅈">🅈</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('🅉')" id="🅉">🅉</a>
      </li>
    </ul>
  </div>
  <div class="w-full p-[10px] box-border flex flex-col bg-[#f7f7f4] border-[1px] border-dashed border-gray-300">
    <h2 class="w-full text-center text-[16px] mb-[10px]">带圈中文字符</h2>
    <p class="w-full text-center text-[14px] text-gray-500 mb-[10px]">一共有 49 个带圈中文字符，点击符号可复制到剪贴板。</p>
    <ul class="symbols-list">
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊀')" id="㊀">㊀</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊁')" id="㊁">㊁</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊂')" id="㊂">㊂</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊃')" id="㊃">㊃</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊄')" id="㊄">㊄</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊅')" id="㊅">㊅</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊆')" id="㊆">㊆</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊇')" id="㊇">㊇</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊈')" id="㊈">㊈</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊉')" id="㊉">㊉</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊌')" id="㊌">㊌</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊋')" id="㊋">㊋</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊍')" id="㊍">㊍</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊎')" id="㊎">㊎</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊏')" id="㊏">㊏</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊐')" id="㊐">㊐</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊊')" id="㊊">㊊</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊰')" id="㊰">㊰</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊒')" id="㊒">㊒</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊣')" id="㊣">㊣</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊤')" id="㊤">㊤</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊥')" id="㊥">㊥</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊦')" id="㊦">㊦</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊧')" id="㊧">㊧</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊨')" id="㊨">㊨</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊑')" id="㊑">㊑</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊓')" id="㊓">㊓</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊔')" id="㊔">㊔</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊕')" id="㊕">㊕</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊖')" id="㊖">㊖</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊗')" id="㊗">㊗</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊘')" id="㊘">㊘</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊙')" id="㊙">㊙</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊚')" id="㊚">㊚</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊛')" id="㊛">㊛</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊜')" id="㊜">㊜</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊝')" id="㊝">㊝</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊠')" id="㊠">㊠</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊡')" id="㊡">㊡</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊢')" id="㊢">㊢</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊩')" id="㊩">㊩</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊪')" id="㊪">㊪</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊫')" id="㊫">㊫</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊞')" id="㊞">㊞</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊟')" id="㊟">㊟</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊭')" id="㊭">㊭</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊬')" id="㊬">㊬</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊮')" id="㊮">㊮</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㊯')" id="㊯">㊯</a>
      </li>
    </ul>
  </div>
  <div class="w-full p-[10px] box-border flex flex-col bg-[#f7f7f4] border-[1px] border-dashed border-gray-300">
    <h2 class="w-full text-center text-[16px] mb-[10px]">希腊字母</h2>
    <p class="w-full text-center text-[14px] text-gray-500 mb-[10px]">一共有 52 个希腊字母，点击符号可复制到剪贴板。</p>
    <ul class="symbols-list">
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Α')" id="Α">Α</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Β')" id="Β">Β</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Γ')" id="Γ">Γ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Δ')" id="Δ">Δ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ε')" id="Ε">Ε</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ζ')" id="Ζ">Ζ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Η')" id="Η">Η</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Θ')" id="Θ">Θ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ι')" id="Ι">Ι</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Κ')" id="Κ">Κ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Λ')" id="Λ">Λ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Μ')" id="Μ">Μ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ν')" id="Ν">Ν</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ξ')" id="Ξ">Ξ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ο')" id="Ο">Ο</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Π')" id="Π">Π</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ρ')" id="Ρ">Ρ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Σ')" id="Σ">Σ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Τ')" id="Τ">Τ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Υ')" id="Υ">Υ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Φ')" id="Φ">Φ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Χ')" id="Χ">Χ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ψ')" id="Ψ">Ψ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('Ω')" id="Ω">Ω</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('α')" id="α">α</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('β')" id="β">β</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('γ')" id="γ">γ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('δ')" id="δ">δ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ε')" id="ε">ε</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ζ')" id="ζ">ζ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('η')" id="η">η</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('θ')" id="θ">θ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ι')" id="ι">ι</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('κ')" id="κ">κ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('λ')" id="λ">λ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('μ')" id="μ">μ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ν')" id="ν">ν</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ξ')" id="ξ">ξ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ο')" id="ο">ο</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('π')" id="π">π</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ρ')" id="ρ">ρ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ς')" id="ς">ς</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('σ')" id="σ">σ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('τ')" id="τ">τ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('υ')" id="υ">υ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('φ')" id="φ">φ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('χ')" id="χ">χ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ψ')" id="ψ">ψ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ω')" id="ω">ω</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ϑ')" id="ϑ">ϑ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ϒ')" id="ϒ">ϒ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ϖ')" id="ϖ">ϖ</a>
      </li>
    </ul>
  </div>
  <div class="w-full p-[10px] box-border flex flex-col bg-[#f7f7f4] border-[1px] border-dashed border-gray-300">
    <h2 class="w-full text-center text-[16px] mb-[10px]">日文符号</h2>
    <p class="w-full text-center text-[14px] text-gray-500 mb-[10px]">一共有 189 个日文符号，点击符号可复制到剪贴板。</p>
    <ul class="symbols-list">
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ぁ')" id="ぁ">ぁ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('あ')" id="あ">あ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ぃ')" id="ぃ">ぃ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('い')" id="い">い</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ぅ')" id="ぅ">ぅ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('う')" id="う">う</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ぇ')" id="ぇ">ぇ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('え')" id="え">え</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ぉ')" id="ぉ">ぉ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('お')" id="お">お</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('か')" id="か">か</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('が')" id="が">が</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('き')" id="き">き</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ぎ')" id="ぎ">ぎ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('く')" id="く">く</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ぐ')" id="ぐ">ぐ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('け')" id="け">け</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('げ')" id="げ">げ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('こ')" id="こ">こ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ご')" id="ご">ご</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('さ')" id="さ">さ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ざ')" id="ざ">ざ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('し')" id="し">し</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('じ')" id="じ">じ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('す')" id="す">す</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ず')" id="ず">ず</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('せ')" id="せ">せ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ぜ')" id="ぜ">ぜ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('そ')" id="そ">そ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ぞ')" id="ぞ">ぞ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('た')" id="た">た</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('だ')" id="だ">だ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ち')" id="ち">ち</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ぢ')" id="ぢ">ぢ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('っ')" id="っ">っ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('つ')" id="つ">つ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('づ')" id="づ">づ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('て')" id="て">て</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('で')" id="で">で</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('と')" id="と">と</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ど')" id="ど">ど</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('な')" id="な">な</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('に')" id="に">に</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ぬ')" id="ぬ">ぬ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ね')" id="ね">ね</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('の')" id="の">の</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('は')" id="は">は</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ば')" id="ば">ば</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ぱ')" id="ぱ">ぱ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ひ')" id="ひ">ひ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('び')" id="び">び</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ぴ')" id="ぴ">ぴ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ふ')" id="ふ">ふ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ぶ')" id="ぶ">ぶ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ぷ')" id="ぷ">ぷ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('へ')" id="へ">へ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('べ')" id="べ">べ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ぺ')" id="ぺ">ぺ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ほ')" id="ほ">ほ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ぼ')" id="ぼ">ぼ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ぽ')" id="ぽ">ぽ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ま')" id="ま">ま</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('み')" id="み">み</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('む')" id="む">む</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('め')" id="め">め</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('も')" id="も">も</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ゃ')" id="ゃ">ゃ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('や')" id="や">や</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ゅ')" id="ゅ">ゅ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ゆ')" id="ゆ">ゆ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ょ')" id="ょ">ょ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('よ')" id="よ">よ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ら')" id="ら">ら</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('り')" id="り">り</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('る')" id="る">る</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('れ')" id="れ">れ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ろ')" id="ろ">ろ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ゎ')" id="ゎ">ゎ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('わ')" id="わ">わ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ゐ')" id="ゐ">ゐ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ゑ')" id="ゑ">ゑ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('を')" id="を">を</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ん')" id="ん">ん</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ゔ')" id="ゔ">ゔ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ゕ')" id="ゕ">ゕ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ゖ')" id="ゖ">ゖ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('゚')" id="゚">゚</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('゛')" id="゛">゛</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('゜')" id="゜">゜</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ゝ')" id="ゝ">ゝ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ゞ')" id="ゞ">ゞ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ゟ')" id="ゟ">ゟ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('゠')" id="゠">゠</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ァ')" id="ァ">ァ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ア')" id="ア">ア</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ィ')" id="ィ">ィ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('イ')" id="イ">イ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ゥ')" id="ゥ">ゥ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ウ')" id="ウ">ウ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ェ')" id="ェ">ェ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('エ')" id="エ">エ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ォ')" id="ォ">ォ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('オ')" id="オ">オ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('カ')" id="カ">カ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ガ')" id="ガ">ガ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('キ')" id="キ">キ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ギ')" id="ギ">ギ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ク')" id="ク">ク</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('グ')" id="グ">グ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ケ')" id="ケ">ケ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ゲ')" id="ゲ">ゲ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('コ')" id="コ">コ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ゴ')" id="ゴ">ゴ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('サ')" id="サ">サ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ザ')" id="ザ">ザ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('シ')" id="シ">シ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ジ')" id="ジ">ジ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ス')" id="ス">ス</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ズ')" id="ズ">ズ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('セ')" id="セ">セ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ゼ')" id="ゼ">ゼ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ソ')" id="ソ">ソ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ゾ')" id="ゾ">ゾ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('タ')" id="タ">タ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ダ')" id="ダ">ダ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('チ')" id="チ">チ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ヂ')" id="ヂ">ヂ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ッ')" id="ッ">ッ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ツ')" id="ツ">ツ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ヅ')" id="ヅ">ヅ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('テ')" id="テ">テ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('デ')" id="デ">デ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ト')" id="ト">ト</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ド')" id="ド">ド</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ナ')" id="ナ">ナ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ニ')" id="ニ">ニ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ヌ')" id="ヌ">ヌ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ネ')" id="ネ">ネ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ノ')" id="ノ">ノ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ハ')" id="ハ">ハ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('バ')" id="バ">バ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('パ')" id="パ">パ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ヒ')" id="ヒ">ヒ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ビ')" id="ビ">ビ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ピ')" id="ピ">ピ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('フ')" id="フ">フ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ブ')" id="ブ">ブ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('プ')" id="プ">プ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ヘ')" id="ヘ">ヘ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ベ')" id="ベ">ベ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ペ')" id="ペ">ペ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ホ')" id="ホ">ホ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ボ')" id="ボ">ボ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ポ')" id="ポ">ポ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('マ')" id="マ">マ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ミ')" id="ミ">ミ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ム')" id="ム">ム</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('メ')" id="メ">メ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('モ')" id="モ">モ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ャ')" id="ャ">ャ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ヤ')" id="ヤ">ヤ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ュ')" id="ュ">ュ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ユ')" id="ユ">ユ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ョ')" id="ョ">ョ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ヨ')" id="ヨ">ヨ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ラ')" id="ラ">ラ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('リ')" id="リ">リ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ル')" id="ル">ル</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('レ')" id="レ">レ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ロ')" id="ロ">ロ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ヮ')" id="ヮ">ヮ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ワ')" id="ワ">ワ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ヰ')" id="ヰ">ヰ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ヱ')" id="ヱ">ヱ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ヲ')" id="ヲ">ヲ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ン')" id="ン">ン</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ヴ')" id="ヴ">ヴ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ヵ')" id="ヵ">ヵ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ヶ')" id="ヶ">ヶ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ヷ')" id="ヷ">ヷ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ヸ')" id="ヸ">ヸ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ヹ')" id="ヹ">ヹ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ヺ')" id="ヺ">ヺ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('・')" id="・">・</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ー')" id="ー">ー</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ヽ')" id="ヽ">ヽ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ヾ')" id="ヾ">ヾ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ヿ')" id="ヿ">ヿ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('㍿')" id="㍿">㍿</a>
      </li>
    </ul>
  </div>
  <div class="w-full p-[10px] box-border flex flex-col bg-[#f7f7f4] border-[1px] border-dashed border-gray-300">
    <h2 class="w-full text-center text-[16px] mb-[10px]">韩文符号</h2>
    <p class="w-full text-center text-[14px] text-gray-500 mb-[10px]">一共有 88 个韩文符号，点击符号可复制到剪贴板。</p>
    <ul class="symbols-list">
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㄱ')" id="ㄱ">ㄱ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㄲ')" id="ㄲ">ㄲ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㄳ')" id="ㄳ">ㄳ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㄴ')" id="ㄴ">ㄴ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㄵ')" id="ㄵ">ㄵ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㄶ')" id="ㄶ">ㄶ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㄷ')" id="ㄷ">ㄷ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㄸ')" id="ㄸ">ㄸ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㄹ')" id="ㄹ">ㄹ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㄺ')" id="ㄺ">ㄺ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㄻ')" id="ㄻ">ㄻ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㄼ')" id="ㄼ">ㄼ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㄽ')" id="ㄽ">ㄽ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㄾ')" id="ㄾ">ㄾ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㄿ')" id="ㄿ">ㄿ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅀ')" id="ㅀ">ㅀ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅁ')" id="ㅁ">ㅁ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅂ')" id="ㅂ">ㅂ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅃ')" id="ㅃ">ㅃ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅄ')" id="ㅄ">ㅄ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅅ')" id="ㅅ">ㅅ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅆ')" id="ㅆ">ㅆ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅇ')" id="ㅇ">ㅇ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅈ')" id="ㅈ">ㅈ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅉ')" id="ㅉ">ㅉ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅊ')" id="ㅊ">ㅊ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅋ')" id="ㅋ">ㅋ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅌ')" id="ㅌ">ㅌ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅍ')" id="ㅍ">ㅍ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅎ')" id="ㅎ">ㅎ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅏ')" id="ㅏ">ㅏ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅐ')" id="ㅐ">ㅐ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅑ')" id="ㅑ">ㅑ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅒ')" id="ㅒ">ㅒ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅓ')" id="ㅓ">ㅓ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅔ')" id="ㅔ">ㅔ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅕ')" id="ㅕ">ㅕ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅖ')" id="ㅖ">ㅖ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅗ')" id="ㅗ">ㅗ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅘ')" id="ㅘ">ㅘ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅙ')" id="ㅙ">ㅙ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅚ')" id="ㅚ">ㅚ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅛ')" id="ㅛ">ㅛ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅜ')" id="ㅜ">ㅜ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅝ')" id="ㅝ">ㅝ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅞ')" id="ㅞ">ㅞ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅟ')" id="ㅟ">ㅟ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅠ')" id="ㅠ">ㅠ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅡ')" id="ㅡ">ㅡ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅢ')" id="ㅢ">ㅢ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅥ')" id="ㅥ">ㅥ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅦ')" id="ㅦ">ㅦ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅧ')" id="ㅧ">ㅧ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅨ')" id="ㅨ">ㅨ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅩ')" id="ㅩ">ㅩ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅪ')" id="ㅪ">ㅪ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅫ')" id="ㅫ">ㅫ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅬ')" id="ㅬ">ㅬ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅭ')" id="ㅭ">ㅭ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅮ')" id="ㅮ">ㅮ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅯ')" id="ㅯ">ㅯ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅰ')" id="ㅰ">ㅰ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅱ')" id="ㅱ">ㅱ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅲ')" id="ㅲ">ㅲ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅳ')" id="ㅳ">ㅳ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅴ')" id="ㅴ">ㅴ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅵ')" id="ㅵ">ㅵ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅶ')" id="ㅶ">ㅶ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅷ')" id="ㅷ">ㅷ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅸ')" id="ㅸ">ㅸ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅹ')" id="ㅹ">ㅹ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅺ')" id="ㅺ">ㅺ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅻ')" id="ㅻ">ㅻ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅼ')" id="ㅼ">ㅼ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅽ')" id="ㅽ">ㅽ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅾ')" id="ㅾ">ㅾ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㅿ')" id="ㅿ">ㅿ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㆀ')" id="ㆀ">ㆀ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㆁ')" id="ㆁ">ㆁ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㆂ')" id="ㆂ">ㆂ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㆃ')" id="ㆃ">ㆃ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㆄ')" id="ㆄ">ㆄ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㆅ')" id="ㆅ">ㆅ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㆆ')" id="ㆆ">ㆆ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㆇ')" id="ㆇ">ㆇ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㆈ')" id="ㆈ">ㆈ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㆉ')" id="ㆉ">ㆉ</a>
      </li>
      <li>
        <a href="javascript:void(0)" title="点击复制" @click="copy('ㆊ')" id="ㆊ">ㆊ</a>
      </li>
    </ul>
  </div>
</div>
</template>

<script setup lang="ts">
import { 
  ref
} from 'vue';
import { message } from 'ant-design-vue';
import Navigation from '../components/Navigation.vue';
import { copyText } from '../utils/utils.js';

/**
 * 复制
 * @param {string} text
 */
const copy = (text) => {
  console.log('---- copy ----:', text);
  copyText(text).then(() => {
    message.success('复制成功');
  }).catch(err => {
    message.error('复制失败，可手动选择复制');
    console.log('---- copyText ----:', err);
  });
};
</script>

<style scoped lang="scss">
.symbols-list{
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  li{
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border:1px solid #ccc;
    margin: 0 5px 5px 0;
    background-color: #fff;
    a{
      color: green;
      font-size: 16px;
      text-decoration: none;
    }
  }
}
</style>