<template>
  <div class="video">
    <div class="video-content">
      <iframe
        class="iframe"
        src="https://www.youtube.com/embed/WCtcXiBlhPg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.video {
  display: flex;
  justify-content: center;
}
.video-content {
  width: 100vh;
  height: 100%;
}
iframe {
  width: 100%;
  height: 100%;
}
</style>
