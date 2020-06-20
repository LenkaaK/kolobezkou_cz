<template>
  <div>
    <div class="graf">
        <figure class="pie-chart">
            <figcaption>
                Terén 95%<span style="color:#00818a"></span><br>
                Asfalt 5%<span style="color:#ec9b3b"></span>
           </figcaption>
        </figure>
    </div>
  </div>
</template>

<script>
export default {
    props: ["trasa"]
}
</script>

<style>
  .pie-chart {
    background:
      radial-gradient(
        circle closest-side,
        #eee,
        #eee 39.6%,
        transparent 39.6%,
        transparent 60%,
        #eee 0
      ),
      conic-gradient(
        #00818a 0,
        #00818a 5%,
        #ec9b3b 0,
        #ec9b3b 100%
    );
    position: relative;
    max-width: 500px;
    min-height: 350px;
    margin: 0;
  }

  .pie-chart figcaption {
    position: absolute;
    bottom: 45%;
    right: 42%;
    font-size: smaller;
    text-align: center;
  }

  .pie-chart span:after {
    display: inline-block;
    content: "";
    width: 0.8em;
    height: 0.8em;
    margin-left: 0.4em;
    height: 0.8em;
    border-radius: 0.2em;
    background: currentColor;
  }
</style>