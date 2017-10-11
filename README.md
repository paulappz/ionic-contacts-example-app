This is an example app of [Ionic 3](http://ionicframework.com/docs/) framework.

## What does this app do?
It is a very basic application which displays contacts in a list. I've used https://randomuser.me API to fetch random contacts to display. On the top of the page I've added a search bar to filter the contacts from the list. This is done on local data instead of remote data.

Each contact can be deleted/favorited by swiping right on the list item. We show appropriate message on deleting the contact from the list.

Clicking on each contact from the list opens up the contact detail page where we show details of the contact. If the particular contact is favorited a star is displayed on the right side of the first card.

## Components and Features used in the application?
- [Swipable list](https://ionicframework.com/docs/api/components/item/ItemSliding/)
- [Search bar](https://ionicframework.com/docs/api/components/searchbar/Searchbar/)
- [Providers](https://angular.io/api/core/Provider)
- [ToastController](https://ionicframework.com/docs/api/components/toast/ToastController/)
- [LoadingController](https://ionicframework.com/docs/api/components/loading/LoadingController/)
- [NavController](https://ionicframework.com/docs/api/navigation/NavController/)
- [CallNumber](https://ionicframework.com/docs/native/call-number/)
- [EmailComposer](https://ionicframework.com/docs/native/email-composer/)
- [NavParams](https://ionicframework.com/docs/api/navigation/NavParams/)
- [HttpModule](https://angular.io/api/http/HttpModule)
