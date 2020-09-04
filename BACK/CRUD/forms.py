from django import forms
from .models import Post

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title','content',]

    def __init__(self, *args, **kwargs):
        super(PostForm, self).__init__(*args, **kwargs)
        for field in iter(self.fields):
            self.fields[field].widget.attrs.update({
                'class': 'form-control'
        })
        
    title = forms.CharField(
        label='제목',
        help_text='100자 이내로 입력하세요',
        widget=forms.TextInput(
            attrs={
                'placeholder':'제목',
            },
        ),
    )
    description = forms.CharField(
        label='내용',
        help_text='내용을 입력하세요',
        widget=forms.Textarea(
            attrs={
                'placeholder':'내용',
            }
        )
    )
