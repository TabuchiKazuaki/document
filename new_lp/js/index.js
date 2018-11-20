new Vue({
  el: '#app',
  data () {
    return {
      items: null,
    }
  },
  mounted () {
    fetch(
      'https://script.google.com/macros/s/AKfycbyO-E4tMf-Vgiq7SbhYNKAS92qV1rIicsvtatFojY4wcAvfDWA/exec',
    )
      .then(res => res.json())
      .then(
      result => {
        this.items = result
      },
      error => {

      },
    );
  }
})
new Vue({
  el: '#reality',
  data () {
    return {
      realitys: null,
    }
  },
  mounted () {
    fetch(
      'https://script.google.com/macros/s/AKfycbyO-E4tMf-Vgiq7SbhYNKAS92qV1rIicsvtatFojY4wcAvfDWA/exec',
    )
      .then(res => res.json())
      .then(
      result => {
        this.realitys = result
      },
      error => {

      },
    );
  }
})
new Vue({
  el: '#anime',
  data () {
    return {
      animes: null,
    }
  },
  mounted () {
    fetch(
      'https://script.google.com/macros/s/AKfycbyO-E4tMf-Vgiq7SbhYNKAS92qV1rIicsvtatFojY4wcAvfDWA/exec',
    )
      .then(res => res.json())
      .then(
      result => {
        this.animes = result
      },
      error => {

      },
    );
  }
})
new Vue({
  el: '#drama',
  data () {
    return {
      dramas: null,
    }
  },
  mounted () {
    fetch(
      'https://script.google.com/macros/s/AKfycbyO-E4tMf-Vgiq7SbhYNKAS92qV1rIicsvtatFojY4wcAvfDWA/exec',
    )
      .then(res => res.json())
      .then(
      result => {
        this.dramas = result
      },
      error => {

      },
    );
  }
})
new Vue({
  el: '#corea',
  data () {
    return {
      coreas: null,
    }
  },
  mounted () {
    fetch(
      'https://script.google.com/macros/s/AKfycbyO-E4tMf-Vgiq7SbhYNKAS92qV1rIicsvtatFojY4wcAvfDWA/exec',
    )
      .then(res => res.json())
      .then(
      result => {
        this.coreas = result
      },
      error => {

      },
    );
  }
})
new Vue({
  el: '#copy',
  data () {
    return {
      copys: null,
    }
  },
  mounted () {
    fetch(
      'https://script.google.com/macros/s/AKfycbyO-E4tMf-Vgiq7SbhYNKAS92qV1rIicsvtatFojY4wcAvfDWA/exec',
    )
      .then(res => res.json())
      .then(
      result => {
        this.copys = result
      },
      error => {

      },
    );
  }
})