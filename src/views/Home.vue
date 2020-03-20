<template>
<div>
  <div class="wrapper">
    <div class="posts">
      <div class="post add">
        <p class="user">Posting as: {{getName(1)}}</p>
        <form v-on:submit.prevent="addComment">
        <p class="comment">
          <input v-model="addedComment" />
          <button class="btn btn-primary" type="submit">
            <svg class="bi bi-reply-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.079 11.9l4.568-3.281a.719.719 0 000-1.238L9.079 4.1A.716.716 0 008 4.719V6c-1.5 0-6 0-7 8 2.5-4.5 7-4 7-4v1.281c0 .56.606.898 1.079.62z"/>
            </svg>
          </button>
        </p>
        </form>
      </div>
      <div class="post" v-for="post in this.$root.$data.posts" :key="post.id">
        <p class="user">{{getName(post.uid)}}</p>
        <p class="date">{{getDate(post.time)}}</p>
        <p class="comment">{{post.comment}}</p>
      </div>
    </div>
  </div>  
</div>
</template>

<script>
export default {
  name: 'Home',
  data: function() {
    return {
      addedComment: '',
    };
  },
  methods: {
    getDate(timecode) {
      var date = new Date(timecode * 1000);
      return (date.getMonth() + 1) + "/" + date.getDate() + "/" + (date.getFullYear() % 100) + " " + date.getHours() + ":" + ("0" + date.getMinutes()).substr(-2) + " GMT";
    },
    getName(uid) {
      var users = this.$root.$data.contacts;
      return users.filter(e => e.id == uid)[0].name;
    },
    addComment() {
      if (this.addedComment == '') return;
      var currDate = new Date();
      var date = Math.round(currDate.getTime() / 1000);
      var id = this.$root.$data.posts[0].id + 1;
      var uid = 1;
      this.$root.$data.posts.unshift({
        id: id,
        uid: uid,
        comment: this.addedComment,
        time: date,
      });
      this.addedComment = '';
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

.posts {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  padding-bottom: 0px;
  max-width: 800px;
  width: 100%;
  background-color: #ccc;
  margin: 0;
}

.post {
  border-radius: 5px;
  background-color: #fff;
  padding: 5px;
  margin: 0px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px #111;
}

p.user {
  margin-bottom: 0px;
  font-weight: 700;
}

p.date {
  margin-bottom: 5px;
  color: #666;
  font-size: 80%;
}

p.comment {
  margin: 0px;
  font-size: 200%
}

.comment button {
  background-color: blue;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>