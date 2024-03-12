
<script lang="ts">
    import {
      Button,
      buttonVariants
    } from "$lib/components/ui/button/index.js";
    import * as Dialog from "$lib/components/ui/dialog/index";
    import PostIcon from '$lib/assets/PostIcon.png';
    import  DownIcon  from '$lib/assets/DownIcon.png';
    import { profile } from "../../utils/data";
	import Textarea from "./ui/textarea/textarea.svelte";
  </script>



<Dialog.Root>
    <Dialog.Trigger>
      <Button class="bg-white text-black-100 border gap-1 w-[6.375rem] h-[2.25rem] border-black-100 shadow-custom  text-black-100" style={`box-shadow: 0 6px 1px 0 rgba(0, 0, 0, 1);`}>
        <img src={PostIcon} alt="Button Icon" />
        Post
    </Button>
      </Dialog.Trigger>
    <Dialog.Content>
      <Dialog.Header>
            <div class="flex-row flex item-center justify-start gap-2">
                <img src={profile.pic.src} alt={profile.pic.alt} class="w-[2.875rem] h-[2.875rem]"/>
                <div class="flex flex-col item-left space-y-0.5" >
                    <div class="flex flex-row items-center gap-2">
                        <p class="text-black-200 bold-16">{profile.name.firstName}</p>
                        <p class="text-black-200 bold-16">{profile.name.lastName}</p>
                    </div>
                    <p class="text-silver-100 text-[12px]">Post to Anyone</p>
                </div>
            </div>  
      </Dialog.Header>
        <Textarea class="mt-2 w-full h-40" placeholder="Share your thoughts"/>
      <Dialog.Footer>
        <Button type="submit">Post</Button>
      </Dialog.Footer>
    </Dialog.Content>
  </Dialog.Root>