import { writable } from "svelte/store";
import { profile } from "../../utils/data";

export const follow = writable(profile.followStatus);
