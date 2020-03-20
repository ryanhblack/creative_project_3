<template>
<div>
  <div class="wrapper">
    <form v-on:submit.prevent="addContact">
      <p>Name: <input v-model="addedName" /></p>
      <p>Email: <input v-model="addedEmail" /></p>
      <p>Phone: <input v-model="addedPhone" /></p>
      <p><button class="btn btn-primary btn-lg" type="submit">
        <svg class="bi bi-person-plus-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 100-6 3 3 0 000 6zm7.5-3a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13V5.5a.5.5 0 01.5-.5z" clip-rule="evenodd"/>
        <path fill-rule="evenodd" d="M13 7.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z" clip-rule="evenodd"/>
        </svg>
        Add Contact
      </button></p>
    </form>
  </div>
</div>
</template>

<script>
export default {
  name: 'Post',
  data: function() {
    return {
      addedName: '',
      addedEmail: '',
      addedPhone: '',
    };
  },
  methods: {
    addContact() {
      if (this.addedName == '') return;
      if (this.addedPhone == '') return;
      if (this.addedEmail == '') return;
      var id = this.$root.$data.contacts[this.$root.$data.contacts.length - 1].id + 1;
      this.$root.$data.contacts.push({
        id: id,
        name: this.addedName,
        email: this.addedEmail,
        phone: this.addedPhone,
      });
    },
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

form {
  max-width: 800px;
  width: 100%;
  text-align: center;
  background-color: #ccc;
  padding: 10px;
  border-radius: 15px;
}

input {
 border-radius: 5px;
 padding: 5px;
}
</style>