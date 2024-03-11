<script>
	import * as AlertDialog from '$lib/components/ui/alert-dialog/index';
	import { Button } from './ui/button';
	import { follow } from '$lib/store/followStore';
	import { profile } from '../../utils/data';

	const handleClick = () => {
		if ($follow === 'Followed') {
			follow.set('Follow');
		} else {
			follow.set('Followed');
		}
	};
</script>

<AlertDialog.Root>
	<AlertDialog.Trigger asChild let:builder>
		<Button
			builders={[builder]}
			class="shadow-custom hover:shadow-custom-hover mt-10 h-[2.25rem] w-[6.375rem] gap-1 border border-black-100 bg-white text-black-100 hover:bg-blue-500 hover:text-white"
			style={`box-shadow: 0 6px 1px 0 rgba(0, 0, 0, 1);`}
            
		>
		{$follow}
		</Button>
	</AlertDialog.Trigger>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title
				>{$follow === 'Follow' ? `Are you sure want to Follow ${profile.name.firstName}` : `Are you sure want to Unfollow ${profile.name.firstName}` }</AlertDialog.Title
			>
			<AlertDialog.Description>
                {$follow === 'Follow' ? `Now you can see posts from ${profile.name.firstName} on your feed, like their post and can interact. ${profile.name.firstName} will be notified that you’ve followed.` : `Stop seeing posts from ${profile.name.firstName} on your feed. ${profile.name.firstName} won’t be notified that you’ve unfollowed. ` }
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
			<AlertDialog.Action on:click={() => handleClick()}
				>{$follow === 'Followed' ? 'Unfollow' : 'Follow'}</AlertDialog.Action
			>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>

