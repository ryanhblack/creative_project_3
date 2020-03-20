<template>
<div>
  <div class="wrapper">
    <div class="contacts">
      <div class="contact" v-for="contact in this.$root.$data.contacts" :key="contact.id">
        <p class="name">{{contact.name}}</p>
        <p class="email">{{contact.email}}</p>
        <p class="phone">{{contact.phone}}</p>
      </div>
    </div>
  </div>  
</div>
</template>

<script>
export default {
  name: 'Contacts',
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.contacts {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  padding-bottom: 0px;
  max-width: 800px;
  width: 100%;
  background-color: #ccc;
  margin: 0;
}

.contact {
  background-color: #fff;
  padding: 5px;
  margin: 0px;
  box-shadow: 0 2px 4px #111;
  border-bottom: 2px solid #ccc;
}

.contact:first-child {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.contact:last-child {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom: 0px;
  margin-bottom: 10px;
}

p.name {
  margin-bottom: 0px;
  font-weight: 700;
  font-size: 14pt;
}

p.email {
  margin-bottom: 0px;
  font-size: 12pt;
}

p.email {
  margin-bottom: 0px;
  font-size: 12pt;
}
</style>