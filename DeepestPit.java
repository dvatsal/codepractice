/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package practice;

import java.util.TreeSet;

/**
 *
 * @author vatsal
 */
public class DeepestPit{

     public static void main(String []args){
        System.out.println("Hello World");
        int [] A = {0,1,3,-2,0,1,0,-3,2,3};
        DeepestPit.deepestPit(A);
        
     }
     
     static void deepestPit(int []A){
         
         TreeSet<Integer> depthList;
         depthList = new TreeSet<Integer>();
         
         for (int P = 0; P < A.length;P++)
         {
             
             
             for(int R = A.length-1; R>P; R--)
             {
                    
                 int Q = R-1;
                 
                 if(Q == 0)
                     break;
                 
                 if(A[P]>A[Q] && A[Q]<A[R]){
                     System.out.print("Indices P,Q,R->"+P+" "+Q+" "+R);
                     System.out.println(" Values->"+A[P]+" "+A[Q]+" "+A[R]);
                     int temp1 = A[P]-A[Q];
                     int temp2 = A[R]-A[Q];
                   System.out.println("Depth->P-Q "+temp1+" Depth->R-Q "+temp2+" "+" MINIMUM "+Math.min(A[P]-A[Q],A[R]-A[Q]));
                     depthList.add(Math.min(A[P]-A[Q],A[R]-A[Q]));
                 }
                 
                 
             }
             
         }
         
         System.out.println("highest depth:-"+depthList.last().toString());
         
     }
}
