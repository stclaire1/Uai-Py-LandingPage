import { IconName } from "@/lib/Icons"

export type Feature = {
    id: number
    title: string
    description: string
    icon: IconName
    external?: boolean;
}
