
<?php

$data = [
    'album' => ['Save Me, San Francisco', 'Graceland', 'Title', 'We Sing. We Dance. We Steal Things.'],
    'releaseDate' => ['October 26, 2009', 'August 25, 1986', 'January 9, 2015', 'May 21, 1997'],
    'coverArt' => ['<img src="images/train.jpg" alt="save me, san francisco cover art">', '<img src="images/Graceland.jpg" alt="graceland cover art">', '<img src="images/Trainor.jpg" alt="title cover art">', '<img src="images/Mraz.jpg" alt="we sing. we dance. we steal things. cover art">'],
    'link' => ['<a href="#">Buy now</a>', '<a href="#">Buy now</a>', '<a href="#">Buy now</a>', '<a href="#">Buy now</a>']
    
        
];

function html_table($data = [])
{
    $rows = [];
    foreach ($data as $row){
        $cells = []; 
        foreach ($row as $cell) {
            $cells[] = "<td>{$cell}</td>";
        }    
    $rows[] = "<tr>" . implode('', $cells) . "</tr>";
    }    
return "<tbody>" . implode('', $rows) . "</tbody>";
};

if (is_array($data)) {
    echo html_table($data);
    
}
else {
    echo "<tbody><tr><td colspan='4'>Sorry, No data available</td></tr></tbody>";
}
//sample// echo'<pre>', var_dump($data); echo '</pre>'; // 
 



?>
  
