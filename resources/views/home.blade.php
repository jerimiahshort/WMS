@extends('app')

@section('content')
    <h1>Home</h1>
    @if(Auth::check())
    <p>Welcome back, {{ Auth::user()->name }}!</p>
    @else
    <p>Welcome, guest!</p>
    @endif
@stop