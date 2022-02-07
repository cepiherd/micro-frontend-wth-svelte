

<script>
    let count = 0

    window.IncNumber = () => {
        count +=1
    }
</script>
<header >
    <div>My Svelte Header Wow</div>
    <div>{count}</div>
  </header>

  <style>
      header{
          background:#ee1535;
          padding:1em;
          color:#fff;
          display: flex;
          justify-content: space-around;
          border-radius: 0.3rem;
      }
  </style>