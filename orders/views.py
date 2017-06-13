from django.http import JsonResponse


def basket_adding(request):

    return_dict = dict()

    session_key = request.session.session_key
    if not session_key:
        request.session.cycle_key()

    print(request.POST)

    return JsonResponse(return_dict)