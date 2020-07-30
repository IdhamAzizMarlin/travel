<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>Nomads | @yield('title')</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="Premium Multipurpose Admin & Dashboard Template" name="description" />
    <meta content="Themesdesign" name="author" />

    <!-- STYLESHEET -->
    @include('includes.admin.style')
</head>

<body data-topbar="colored">

    <!-- Begin page -->
    <div id="layout-wrapper">

        <!-- HEADER -->
        @include('includes.admin.header')

        <!-- ========== Left Sidebar Start ========== -->
        <div class="vertical-menu">

            <div data-simplebar class="h-100">

                <!-- SIDEBAR -->
                @include('includes.admin.sidebar')
            </div>
        </div>
        <!-- Left Sidebar End -->

        <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== -->
        <div class="main-content">

            <div class="page-content">

                <!-- BREADCRUMB -->
                @include('includes.admin.breadcrumb')

                <!-- CONTENT -->
                @yield('content')
            </div>
            <!-- End Page-content -->

            <!-- FOOTER -->
            @include('includes.admin.footer')
        </div>
        <!-- end main content-->

    </div>
    <!-- END layout-wrapper -->

    <!-- JAVASCRIPT -->
    @include('includes.admin.script')

</body>

</html>