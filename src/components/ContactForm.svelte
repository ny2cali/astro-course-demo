<script lang="ts">
    import kwesforms from 'kwesforms';
    import { onMount } from 'svelte';

    onMount(() => {
        kwesforms.init();
    });

</script>


<form 
    class="kf-form grid gap-y-2" 
    action="https://kwesforms.com/api/f/tPnp7PKC4eXaRdJXqh2I"

    >

    <label for="comment" class="text-zinc-900 text-2xl mb-2 mt-10">
        What's on your mind?
    </label>

    <textarea
        id="comment"
        name="comment"
        rows="3"
        class="border border-teal-900 rounded-lg text-2xl p-6"
        rules="required|max:255"
        placeholder="Write your comment here..."

    ></textarea>

    <button type="submit" class="bg-teal-900 text-white rounded-lg py-2 px-4 mt-4">
        Submit
    </button>

</form>



