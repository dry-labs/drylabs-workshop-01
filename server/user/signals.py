from allauth.account.signals import user_logged_in
from django.dispatch import receiver
from django.contrib.auth import logout

# Create your madness here.

@receiver(user_logged_in)
def undo(sender, request, **kwargs):

    logout(request)
