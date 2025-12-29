from django.shortcuts import render
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


# Create your views here.

def index(request):
    """Home page view"""
    return render(request, 'index.html')

def about(request):
    """About page view"""
    return render(request, 'about.html')

def projects(request):
    """Projects page view"""
    return render(request, 'projects.html')

def contact(request):
    """
    Enhanced contact view with better error handling and debugging
    """
    return render(request, 'contact.html')